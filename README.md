## What is this program?
This program compares token pair quotes on two DEXes, Aldrin and Raydium.
Once there is a large enough price gap, it opens a position on both side to close this gap.
For example, if the swap price of a token pair (A -> B) is traded at 100 on Aldrin, but 120 on Raydium, it will conduct a long on Aldrin and a short on Raydium in one transaction.

#### Pre-requisites
1. Create a burner Solana wallet
2. Create an .env file and paste private key in .env


#### Quick Start
```bash
npm i
ts-node src/index.ts
```

