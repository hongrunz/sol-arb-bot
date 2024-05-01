"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import bs58 from 'bs58';
const node_fetch_1 = __importDefault(require("node-fetch"));
// import JSBI from 'jsbi';
// import { Connection, PublicKey, Keypair } from '@solana/web3.js';
// import { Jupiter, RouteInfo, TOKEN_LIST_URL, SwapResult } from '@jup-ag/core';
// import { Token } from '@solana/spl-token';
// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT = "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/";
const ENV = (process.env.CLUSTER) || "mainnet-beta";
function fetchPrice() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, node_fetch_1.default)('https://price.jup.ag/v4/price?ids=SOL');
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error('Error fetching price:', error);
            throw error;
        }
    });
}
const main = () => __awaiter(void 0, void 0, void 0, function* () {
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
});
main();
