import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from 'dotenv';
import 'hardhat-deploy';
dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: process.env.DEFAULT_NETWORK,
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    polygonMumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    polygonMainnet: {
      url: process.env.POLYGON_RPC,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
};

export default config;
