const { ethers } = require("hardhat");
async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // à remplacer après le déploiement
  const IPFSStorage = await ethers.getContractFactory("IPFSStorage");
  const contract = await IPFSStorage.attach(contractAddress);
  // Enregistrer le hash IPFS
  const tx = await contract.setCID(
    "QmRdkqZYQCaqaXV34defiwYYspimGjLr9XLqrVtgoTX18o"
  );
  await tx.wait();
  const cid = await contract.getCID();
  console.log("Le CID enregistré est :", cid);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
