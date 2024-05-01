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
ts-node src/main.ts # To run the full arbitrage program and fetch CoinGecko data.
ts-node src/raydium.ts # To run the Proof of Concept program that quotes a swap and initiates it on raydium
ts-node src/jupiter.ts # To run the Proof of Concept program that quotes a swap and initiates it on jupiter
```

### Project Structure
- src/main.ts: contains the algorithm that compares swap prices and detects arbitrage opportunity
- src/raydium.ts: a proof of concept program that quotes a swap and initiates it on raydium
- src/jupiter.ts: a proof of concept program that quotes a swap and initiates it on jupiter
- src/dataSources.ts: Manages data fetching operations, including interactions with the CoinGecko API for cryptocurrency prices.

### Additional Information
- Ensure that the public keys and API keys are correctly set in your .env file or passed securely to the application.
- Regularly update dependencies to keep up with new features and security patches.
vbnet

### Muted Functions
- Pyth Network: Functionality to fetch data from Pyth Network is currently commented out and requires a valid public key to be activated.
- Chainlink: Integration with Chainlink is muted and needs correct contract addresses and a network provider URL to be fully operational.

### Last Test Run
During the last test run:

- The program successfully fetched Bitcoin prices from CoinGecko.
- Detailed Solana pool information was extracted and displayed, indicating successful interaction with the Solana blockchain via the Raydium protocol.
- No data was fetched from Chainlink or Pyth due to muted functions.

## Next Steps: 
- Obtain Necessary Keys: Obtain API keys and public keys for Chainlink and Pyth Network to enable and test the muted functionalities.
- Enable and Test Muted Functions: Uncomment and configure the muted functions once the necessary keys are available. Ensure they integrate smoothly and fetch data as expected.
- Expand Functionality: Consider adding additional cryptocurrencies and tokens to the data fetching scripts for a broader market overview.
- Security Enhancements: Review and enhance security measures, especially regarding the handling of API keys and wallet information.
- Performance Optimization: Monitor and optimize the performance of data fetching and processing to handle higher loads and more complex scenarios.
- Continuous Integration and Testing: Set up automated testing and CI/CD pipelines to ensure code quality and ease of deployment.