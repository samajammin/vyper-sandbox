import counter_interface as CounterInterface

implements: CounterInterface

count: public(int128)

@public
def __init__():
    self.count = 100

# @public
# def increment():
#     self.count += 1

@public
def decrement():
    self.count -= 1