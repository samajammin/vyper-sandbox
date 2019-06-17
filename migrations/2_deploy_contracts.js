const vyperStorage = artifacts.require('vyper_storage');
const counter = artifacts.require('counter');

module.exports = function(deployer) {
  deployer.deploy(counter);
  deployer.deploy(vyperStorage);
};
