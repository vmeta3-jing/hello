import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-gas-reporter';
import '@typechain/hardhat';
import 'solidity-coverage';
import 'hardhat-deploy-tenderly';
import '@openzeppelin/hardhat-upgrades';
import {node_url, accounts, addForkConfiguration} from './utils/network';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: 0,
    owner: {
      default: 1,
    },
    Administrator1: {
      default: 2,
      bsc_test: '0xfeaD27a71FDA8458d8b9f9055B50800eCbCaA10e',
    },
    Administrator2: {
      default: 3,
      bsc_test: '0x2Fe8D2Bc3FD37cD7AcbbE668A7a12F957e79D708',
    },
    interestAccount: {
      default: 5,
    },
    possessor: {
      default: 1,
    },
  },
  networks: addForkConfiguration({
    hardhat: {
      initialBaseFeePerGas: 0, // to fix : https://github.com/sc-forks/solidity-coverage/issues/652, see https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136
    },
    localhost: {
      url: node_url('localhost'),
      accounts: accounts(),
    },
    staging: {
      url: node_url('goerli'),
      accounts: accounts('goerli'),
    },
    production: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    mainnet: {
      url: node_url('mainnet'),
      accounts: accounts('mainnet'),
    },
    goerli: {
      url: node_url('goerli'),
      accounts: accounts('goerli'),
    },
    vmeta3_goerli: {
      url: node_url('vmeta3_goerli'),
      accounts: accounts('vmeta3_goerli'),
    },
    bsc_test: {
      url: node_url('bsc_test'),
      accounts: accounts('bsc_test'),
    },
  }),
  paths: {
    sources: 'contracts',
    deploy: 'deploy',
    deployments: 'deployments',
  },
  gasReporter: {
    currency: 'USD',
    // gasPrice: 20,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    showTimeSpent: true,
    showMethodSig: true,
    // maxMethodDiff: 10,
    outputFile: process.env.CI ? 'gas-report.txt' : undefined,
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  mocha: {
    timeout: 0,
  },
  external: process.env.HARDHAT_FORK
    ? {
        deployments: {
          // process.env.HARDHAT_FORK will specify the network that the fork is made from.
          // these lines allow it to fetch the deployments from the network being forked from both for node and deploy task
          hardhat: ['deployments/' + process.env.HARDHAT_FORK],
          localhost: ['deployments/' + process.env.HARDHAT_FORK],
        },
      }
    : undefined,
  tenderly: {
    project: 'template-ethereum-contracts',
    username: process.env.TENDERLY_USERNAME as string,
  },
};

export default config;
