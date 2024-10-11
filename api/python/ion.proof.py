# id: python.proof@ideas.ionify.net
# by: mike.lee@iskitz
# on: 2016.12.15-08
# to: 2024.10.10-07
# at: 2.1
# is: A proof that ion: invoked object notation can be implemented in Python.
#     For the set of methods needed to fully implement ion in python see:
#     https://docs.python.org/3.6/reference/datamodel.html#emulating-numeric-types

class Ion:
    def getName(self):
        return 'python.hot.ion!'

    def __repr__(self):
        return '<hot.ion>'

    def __str__(self):
        return '♨️ hot.ion!'

    def __add__(self, other):
        print ('♨️ hot.ion + something!')
        return '♨️ hot.ion + something!'

    def __neg__(self):
        print ('♨️ -hot.ion!')
        return '♨️ -hot.ion!'

    def __pos__(self):
        print ('♨️ +hot.ion!')
        return '♨️ +hot.ion!'

    def __invert__(self):
        print ('♨️ ~' + self.getName())
        return '♨️ ~hot.ion!'

ion = Ion()
~ ion
+ ion
- ion
ion + 777
repr (ion)
print (ion)
