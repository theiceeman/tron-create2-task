const { toUtf8Bytes, hexlify, hexZeroPad } = require("@ethersproject/bytes");
const TronWeb = require("tronweb");
// headers: { "TRON-PRO-API-KEY": 'your api key' },
const tronWeb = new TronWeb({
  fullHost: "https://api.shasta.trongrid.io",
  privateKey: process.env.PRIVATE_KEY,
});
var TronCustodialWallet = artifacts.require("./TronCustodialWallet.sol");
var TronCustodialWalletFactory = artifacts.require(
  "./TronCustodialWalletFactory.sol"
);

contract("TronCustodialWallet", function (accounts) {
  let tronCustodialWallet;
  let tronCustodialWalletFactory;

  before(async function () {
    tronCustodialWallet = await TronCustodialWallet.deployed();
    tronCustodialWalletFactory = await TronCustodialWalletFactory.deployed();

    // let addressInBase58 = tronWeb.address.fromHex(tronCustodialWallet.address);
    // console.log("addressInBase58", addressInBase58);
  });
  it("should deploy with createClone2", async function () {
    let result = await tronCustodialWalletFactory.cloneDeterministic.call(
      tronCustodialWallet.address,
      hexZeroPad(hexlify(777), 32)
    );
    console.log("cloneDeterministic:", result);
  });
  it("should call keccak hashing function", async function () {
    let result =
      await tronCustodialWalletFactory.predictDeterministicAddress.call(
        tronCustodialWallet.address,
        hexZeroPad(hexlify(777), 32)
      );
    console.log("predictDeterministicAddress:", result);
  });
});
