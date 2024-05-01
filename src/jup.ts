// Assuming that 'node-fetch' is already installed. If not, you need to install it:
// npm install node-fetch @types/node-fetch

import fetch from 'node-fetch';
// Uncomment these imports if you need them in further development.
// import { Connection, PublicKey, Keypair } from '@solana/web3.js';
// import { Jupiter, RouteInfo, TOKEN_LIST_URL, SwapResult } from '@jup-ag/core';
// import { Token } from '@solana/spl-token';

// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT = "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/";
const ENV = process.env.CLUSTER || "mainnet-beta";

async function fetchPrice() {
    try {
        const response = await fetch('https://price.jup.ag/v4/price?ids=SOL');
        if (!response.ok) {
            throw new Error('Failed to fetch price data.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching price:', error);
        throw error; // Rethrowing the error is optional, depends on how you want to handle errors in the calling function.
    }
}

export async function main() {
    try {
        const data = await fetchPrice();
        console.log('Price data:', data);
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

// Uncomment the line below if you want this script to execute the main function automatically when run.
// main();

