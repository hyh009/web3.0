const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
};

const run = async () => {
  try {
    await main();
    process.exit(0); // process run successfully
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

run();
