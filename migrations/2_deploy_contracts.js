/* 

Running migration: 2_deploy_contracts.js
  Replacing TronCustodialWallet...
  TronCustodialWallet:
    (base58) TGkcmvoVBoff7492Kmkm4UEz3DVbxfqPG1
    (hex) 414a6751752b755182fe99e480223fcc295e05bd92
  Replacing TronCustodialWalletFactory...
  TronCustodialWalletFactory:
    (base58) THQS4jskw3nmrAQbwHrvCZHwL8bjWih9Vy
    (hex) 41518e2f3274d484d2de5bf715797afdec46112ba0




*/
var TronCustodialWallet = artifacts.require("./TronCustodialWallet.sol");
var TronCustodialWalletFactory = artifacts.require("./TronCustodialWalletFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(TronCustodialWallet);
  deployer.deploy(TronCustodialWalletFactory);
};
