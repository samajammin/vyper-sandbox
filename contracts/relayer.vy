
contract Counter():
  def getCount() -> int128: constant

counter: Counter

@public
def __init__(counter_address: address):
  self.counter = Counter(counter_address)

@public
@constant
def getCounterVal() -> int128:
  return self.counter.getCount()
