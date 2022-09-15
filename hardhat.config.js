require("@nomicfoundation/hardhat-toolbox");

const projectId = process.env.PROJECT_ID;
const privateKey = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.9",
};
