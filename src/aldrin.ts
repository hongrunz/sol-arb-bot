// import { Wallet } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import { TokenSwap } from '@aldrin_exchange/sdk';

require('dotenv').config()

// const wallet = Wallet.local() // Or any other solana wallet

async function trade() {
  const tokenSwap = await TokenSwap.initialize()

  const rin = new PublicKey('E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp')
  const usdc = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')

  const rinPrice = await tokenSwap.getPrice({ mintFrom: rin, mintTo: usdc })
  const usdRinPrice = await tokenSwap.getPrice({ mintFrom: usdc, mintTo: rin })

  console.log(`RIN/USDC price: ${rinPrice}`, `USDC/RIN price: ${usdRinPrice}` )

  // const transactionId = await tokenSwap.swap({
  //   wallet: wallet,
  //   // A least 1 of parameters minIncomeAmount/outcomeAmount is required
  //   minIncomeAmount: new BN(1_000_000_000), // 1 RIN
  //   // outcomeAmount: new BN(5_000_000) // 5 USDC
  //   mintFrom: usdc,
  //   mintTo: rin,
  // })
} 
trade()