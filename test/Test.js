const { toUtf8Bytes, hexlify, hexZeroPad } = require("@ethersproject/bytes");
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
    console.log(tronCustodialWallet.address)
    console.log(tronCustodialWallet)
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
