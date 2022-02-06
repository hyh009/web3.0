require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/yLQuoduOTlyaHgD3okVRAjFvaGAb4ymE",
      accounts: [
        "e38dac5b6f14bad503c35fce426771923ac9a42456d24ba6c9e6ae39cf2f4c43",
      ],
    },
  },
};
