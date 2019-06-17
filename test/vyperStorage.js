const vyperStorage = artifacts.require('vyper_storage');

contract('vyper_storage', () => {
  it('...should store the value 89.', async () => {
    const storage = await vyperStorage.deployed();

    // Set value of 89
    await storage.set(89);

    // Get stored value
    const storedData = await storage.get();

    assert.equal(storedData, 89, 'The value 89 was not stored.');
  });
});
