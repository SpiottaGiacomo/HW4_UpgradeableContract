const { ethers, upgrades } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);

    const tokenName = "HWToken";
    const tokenSymbol = "HWT";
    const totSupply = 1000000;

    const IS_UPGRADE = false;
    const TOKEN_ADDRESS = "0x..."; // The address of the previous version of the contract if upgrading

    if (IS_UPGRADE) {
        console.log("Token is being upgraded...");
        const Token2 = await ethers.getContractFactory("Token2");
        const tokenInstance = await upgrades.upgradeProxy(TOKEN_ADDRESS, Token2);
        console.log("New Token deployed @:", tokenInstance.address);
        console.log("Token owner:", await tokenInstance.owner());
    } else {
        console.log("Token is being deployed...");
        const Token = await ethers.getContractFactory("Token");
        const tokenInstance = await upgrades.deployProxy(Token, [tokenName, tokenSymbol, totSupply], { initializer: 'initialize' });
        console.log("New Token deployed @:", tokenInstance.address);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
