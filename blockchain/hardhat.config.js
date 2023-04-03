require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    arbitrum: {
      url: process.env.L2_RPC,
      accounts: [process.env.PRIVKEY],
    },
  },
};
