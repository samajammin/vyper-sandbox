contract VyperStorageInterface():
  def set(new_value : uint256): modifying
  def get() -> uint256: constant
