require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.SEPOLIA_URL}` // Replace with your Alchemy or Infura API key
        // blockNumber: 12345678 // Optional: Specify a block number to fork from
      }
    }
  }
  // docgen: {
  //   sourcesDir: 'contracts',
  //   outputDir: 'documentation',
  //   templates: 'templates',
  //   pages: 'files',
  //   clear: 'true',
  //   runOnCompile: true,
  // },
  
};
