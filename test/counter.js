const counter = artifacts.require('counter');

contract('counter', () => {
  it('should increment.', async () => {
    const instance = await counter.deployed();

    await instance.increment();
    await instance.increment();
    await instance.increment();

    const count = await instance.count();

    assert.equal(count, 103, 'The incorrect value was stored.');
  });

  it('should decrement.', async () => {
    const instance = await counter.deployed();

    await instance.decrement();

    const count = await instance.count();

    assert.equal(count, 102, 'The incorrect value was stored.');
  });
});
