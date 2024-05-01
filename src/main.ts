// Importing necessary functions from data sources and other modules
import { parsePoolInfo } from './raydium';
import { main as jupiterMain } from './jup';
import { fetchCoinGeckoData } from './dataSources';

async function main() {
    try {
        // Fetch price data for Bitcoin from CoinGecko
        const coingeckoPrice = await fetchCoinGeckoData('bitcoin');  // Default is 'bitcoin', adjust as needed
        console.log('CoinGecko Price:', coingeckoPrice);

        // Calling other functionalities coded previously
        await parsePoolInfo();
        await jupiterMain();

        // Example Public Key for Pyth
        // const pythPublicKey = "Enter_Your_Pyth_Public_Key_Here";
        // const pythPrice = await fetchPythData(pythPublicKey);
        // console.log('Pyth Network Price:', pythPrice.price);

        // Example data for Chainlink
        // const chainlinkContractAddress = "Enter_Your_Chainlink_Contract_Address_Here";
        // const chainlinkProviderUrl = "Enter_Your_Chainlink_Provider_Url_Here";
        // const chainlinkPrice = await fetchChainlinkData(chainlinkContractAddress, chainlinkProviderUrl);
        // console.log('Chainlink Price:', chainlinkPrice.price);

    } catch (error) {
        console.error('Error in main execution:', error);
    }
}

main().catch(console.error);
