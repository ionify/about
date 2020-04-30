# id: python.proof@ideas.ionify.net
# by: mike.lee@iskitz
# on: 2016.12.15-08
# to: 2020.04.16-07
# at: 2.0
# is: A proof that ion: invoked object notation can be implemented in Python.
#     For the set of methods needed to fully implement ion in python see:
#     https://docs.python.org/3.6/reference/datamodel.html#emulating-numeric-types

class Ion:
    def getName(self):
        return 'python.hip.ion!'

    def __repr__(self):
        return '<hip.ion>'

    def __str__(self):
        return 'hip.ion!'

    def __add__(self, other):
        print ('hip.ion + something!')
        return 'hip.ion + something!'

    def __neg__(self):
        print ('-hip.ion!')
        return '-hip.ion!'

    def __pos__(self):
        print ('+hip.ion!')
        return '+hip.ion!'

    def __invert__(self):
        print ('~' + self.getName())
        return '~hip.ion!'

ion = Ion()
~ ion
+ ion
- ion
ion + 777
repr (ion)
print (ion)
