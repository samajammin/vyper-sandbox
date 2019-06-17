const counter = artifacts.require('counter');

contract('counter', () => {
  it('should increment.', async () => {
    const instance = await counter.deployed();

    await instance.increment();
    await instance.increment();
    await instance.increment();

    const count = await instance.get();

    assert.equal(count, 3, 'The value 89 was not stored.');
  });

  it('should decrement.', async () => {
    const instance = await counter.deployed();

    await instance.decrement();

    const count = await instance.get();

    assert.equal(count, 2, 'The value 89 was not stored.');
  });

  it('should decrement into negative ints.', async () => {
    const instance = await counter.deployed();

    await instance.decrement();
    await instance.decrement();
    await instance.decrement();

    const count = await instance.get();

    assert.equal(count, -1, 'The value 89 was not stored.');
  });
});
