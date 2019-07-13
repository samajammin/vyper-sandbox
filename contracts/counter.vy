count: int128

@public
def __init__():
    self.count = 100

@public
def increment() -> int128:
    self.count += 1
    return self.count

@public
def decrement() -> int128:
    self.count -= 1
    return self.count

@public
@constant
def getCount() -> int128:
  return self.count