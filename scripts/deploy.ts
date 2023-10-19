import { ethers, run } from "hardhat";
import "@nomiclabs/hardhat-etherscan";

// Function to deploy NFT implementation contract
const deployContract = async () => {
  const contractFactory = await ethers.getContractFactory("WLF");
  const name = "Women Life Freedom";
  const symbol = "WLF";
  const url =
    "https://green-above-salamander-24.mypinata.cloud/ipfs/Qmd9NUfeP9dzxX3GxgzaJ9VdhaSHwMaf5AJkaDWNN6GLtu/";
  const contract = await contractFactory.deploy(name, symbol, url);
  await contract.deployed();
  return contract;
};

// Function to deploy all contracts
const deployAllContracts = async () => {
  console.log("Deploying all contracts...");
  const contract = await deployContract();
  console.table([
    // ["VRF Contract", vrfContract.address],
    ["WLF Contract", contract.address],
  ]);
  return;
};

async function main() {
  await deployAllContracts();
  console.log("\nALL READY!");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

