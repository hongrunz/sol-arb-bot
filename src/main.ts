import { Connection, PublicKey } from '@solana/web3.js';
import { performArbitrage } from './arbitrage';
import { getQuoteFromRaydium, executeSwapOnRaydium } from './raydium';
import { getQuoteFromJupiter, executeSwapOnJupiter } from './jupiter';
// import dotenv from 'dotenv';
// dotenv.config();

// const RPC_ENDPOINT = process.env.SOLANA_RPC_ENDPOINT || 'https://api.mainnet-beta.solana.com';
const connection = new Connection(RPC_ENDPOINT, 'confirmed');
const PRICE_DIFF_THRESHOLD = 1.0;
async function main() {
    try {
        // Fetch quotes for a specific token pair
        const raydiumQuote = await getQuoteFromRaydium(connection);
        const jupiterQuote = await getQuoteFromJupiter(connection);

        // Compare quotes and determine arbitrage opportunity
        if (raydiumQuote && jupiterQuote) {
            const priceDifference = raydiumQuote.price - jupiterQuote.price;
            const priceDifferencePercentage = (priceDifference / jupiterQuote.price) * 100;

            // Check if price difference exceeds a threshold
            if (Math.abs(priceDifferencePercentage) >= PRICE_DIFF_THRESHOLD) {
                console.log(`Arbitrage opportunity detected: ${priceDifferencePercentage}% difference`);
                // Execute trades on both DEXes
                await performArbitrage(raydiumQuote, jupiterQuote, connection);
            } else {
                console.log('No significant price difference for arbitrage.');
            }
        }
    } catch (error) {
        console.error('Failed to execute arbitrage strategy:', error);
    }
}

async function performArbitrage(raydiumQuote, jupiterQuote, connection) {
    if (raydiumQuote.price < jupiterQuote.price) {
        // Buy on Raydium, Sell on Jupiter
        await executeSwapOnRaydium(connection, raydiumQuote);
        await executeSwapOnJupiter(connection, jupiterQuote);
    } else {
        // Buy on Jupiter, Sell on Raydium
        await executeSwapOnJupiter(connection, jupiterQuote);
        await executeSwapOnRaydium(connection, raydiumQuote);
    }
}

main().then(() => console.log('Arbitrage bot started.')).catch(console.error);
