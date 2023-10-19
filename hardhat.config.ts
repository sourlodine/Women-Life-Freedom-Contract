import { HardhatUserConfig, task } from "hardhat/config";
import dotenv from "dotenv";

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "hardhat-typechain";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    deploy: "./scripts",
  },
  networks: {
    coverage: {
      url: "http://127.0.0.1:5458",
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      live: true,
      loggingEnabled: true,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
    bsc_mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      // @ts-ignore
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};

export default config;

