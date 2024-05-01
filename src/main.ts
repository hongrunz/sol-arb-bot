import { parsePoolInfo } from './raydium';
import { main as jupiterMain } from './jup';

async function main() {
  await parsePoolInfo();
  await jupiterMain();
}

main().catch(console.error);
