## What is this program?
This program compares token pair quotes on two DEXes, Jupiter and Raydium.
Once there is a large enough price gap, it opens a position on both side to close this gap.
For example, if the swap price of a token pair (A -> B) is traded at 100 on Jupiter, but 120 on Raydium, it will conduct a long on Jupiter and a short on Raydium in one transaction.

#### Pre-requisites
1. Create a burner Solana wallet
2. Create an .env file and paste the solana wallet private key in .env


#### Quick Start
```bash
npm i
ts-node src/main.ts # To run the arbitrage program
ts-node src/raydium.ts # To run the Proof of Concept program that quotes a swap and initiates it on raydium
ts-node src/jupiter.ts # To run the Proof of Concept program that quotes a swap and initiates it on jupiter
```

### Project Structure
- src/main.ts: contains the algorithm that compares swap prices and detects arbitrage opportunity
- src/raydium.ts: a proof of concept program that quotes a swap and initiates it on raydium
- src/jupiter.ts: a proof of concept program that quotes a swap and initiates it on jupiter
