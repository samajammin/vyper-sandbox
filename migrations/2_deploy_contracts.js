const Relayer = artifacts.require('relayer');
const Counter = artifacts.require('counter');

module.exports = async deployer => {
  let counterInstance;
  await deployer.deploy(Counter).then(instance => (counterInstance = instance));
  await deployer.deploy(Relayer, counterInstance.address);
};
