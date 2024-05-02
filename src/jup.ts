// import bs58 from 'bs58';
import fetch from 'node-fetch';
// import JSBI from 'jsbi';
// import { Connection, PublicKey, Keypair, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
// import { Jupiter, RouteInfo, TOKEN_LIST_URL, SwapResult } from '@jup-ag/core';
// import { Token } from '@solana/spl-token';


// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT = "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/"
const ENV = (process.env.CLUSTER) || "mainnet-beta";

async function fetchPrice() {
    try {
        const response = await fetch('https://price.jup.ag/v4/price?ids=SOL');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching price:', error);
        throw error;
    }
}
export async function executeSwapOnJupiter(connection: Connection, quote: RouteInfo, wallet: PublicKey) {
    // Assume the quote is an object containing a pre-calculated route from the Jupiter SDK
    const jupiter = await Jupiter.load({
        connection,
        cluster: "mainnet-beta",
        user: wallet,
    });

    const { execute } = await jupiter.swap({
        route: quote,
        userPublicKey: wallet,
    });

    const { txid } = await execute();
    console.log(`Swap executed on Jupiter with tx signature: ${txid}`);
    return txid;
}


const main = async () => {
    // Example usage
    fetchPrice()
    .then(data => {
        console.log('Price data:', data);
    })
    .catch(error => {
        // Handle error
    });
//   try {
//     // Setup Solana RPC connection
//     const connection = new Connection(SOLANA_RPC_ENDPOINT);

//     // Fetch token list from Jupiter API
//     // This token list contains token meta data
//     const tokens: Token[] = await (await fetch(TOKEN_LIST_URL[ENV])).json();
//     // ...
//   } catch (error) {
//     throw error;
//   }
}

main()