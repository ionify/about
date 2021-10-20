# ion

**invoked object notation** combines objects with operators that invoke
their behavior and-or observation:

```javascript
~ { "json" : "data" } <= /observable json/
+ {   log  : '👋🏾👨🏾‍💻'}   <= /unobtrusive api/
& ["observable text"] <= /observable text/
```

**ion** was [discovered, defined & developed](../origin.md)
by [Michael Lee](https://github.com/iskitz)
in 2007, and exists & can be implemented within languages that support [procedural](https://en.wikipedia.org/wiki/List_of_programming_languages_by_type#Procedural_languages) [operator overloading](https://en.wikipedia.org/wiki/Operator_overloading).

## form

**ion** combines the
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator)
bitwise-not,
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
and [-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator)
unary operators with [operands](https://en.wikipedia.org/wiki/Operand#Computer_science)
that can be
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer),
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer),
or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals)
literals, or
[references](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type).

**ion** can be expressed as [**lion**](lions.md), literal ion:

```javascript
~{ }      +{ }      -{ }     // 3 object lions
~[ ]      +[ ]      -[ ]     // 3 array  lions
~/ /      +/ /      -/ /     // 3 regular-expression lions
```
and **orion**, object reference ion:

```javascript
~obj      +obj      -obj     // 3 prefixed orion
```

**orion** can also be written using the
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-increment-operator)
and
[-- prefix operators](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-decrement-operator),
and the
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-increment-operator)
and
[-- postfix operators](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-decrement-operator):

```javascript
         ++obj,    --obj     // 2 prefixed  orion
           obj++,    obj--   // 2 postfixed orion
```

### punctuation

**ions** can be combined to form larger expressions using
[arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators),
[bitwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators),
[relational](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators)
&
[equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_operators)
operator punctuation.

This example combines fifteen **lions** with the seventeen **ion**-compatible bitwise,
arithmetic, relational & equality punctuation operators available:

```javascript
~  /example/  -  /punctuation/
^  ["aesop"]  &  /  stories  /  >>  {are:"ions"}
*  ["these"]  +  /expressions/  <<  {are:"too" }
/  ["write"]  %  /them as you/  |   {see:"fit" }
>  ["using"]  >= /  any of   /  <=  [  "these" ]
<     17      == / compatible/  !=  "operators!"
```

As shown

+ arithmetic punctuation can be any of the
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-addition-operator-plus),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-subtraction-operator-minus),
[*](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mul-operator),
[/](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-div-operator), or
[%](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mod-operator)
operators,

+ bitwise punctuation can be any of the
[&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND),
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
[|](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR),
[^](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR),
[<<](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-left-shift-operator), or
[\>>](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-signed-right-shift-operator)
operators,

+ relational punctuation can be any of the
[&gt;, &gt;=, <, or <=](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-relational-operators-runtime-semantics-evaluation)
operators,

+ and equality punctuation can be the
[== or !=](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-equality-operators-runtime-semantics-evaluation)
equality operators when comparing **ions** with
[basic values](https://en.m.wikipedia.org/wiki/Primitive_value).


## function

**ion** is enabled by
[operator overloading](https://en.wikipedia.org/wiki/Operator_overloading)
in multiple languages.


#### [javascript](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-overview)

Enables **ion** via **hip-hop** operator overloading of the `valueOf()` & `toString()`
methods [invoked](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive)
during an
[object's](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[conversion](https://en.wikipedia.org/wiki/Type_conversion)
to a [basic value](https://en.wikipedia.org/wiki/Primitive_value).

**hip: handled-in-place** operator overloading implements the `valueOf()` method within an
object, which enables observing that single object's type conversion:

```javascript
~
{ valueOf:
    function hip ()
      { console.log ("hip: handled-in-place")
      }
}
```

**hop: handled-on-prototype** operator overloading implements the `valueOf()` method on a
`prototype` object, which enables observing the type conversions of all objects sharing
that `prototype`:

```javascript
Object.prototype.valueOf
= function hop ()
    { console.log ('hop: handled-on-prototype')    /*
    | Enables observing all invoked objects except  |
    | Booleans, Dates, Numbers, Strings & Symbols.  */
    }
```

**hip-hop** operator overloading `valueOf()` enables expressing &
[punctuating](#punctuation)
**ions** with these arithmetic, bitwise, relational & equality operators:

```javascript
~  /example/  -  /punctuation/
^  ["aesop"]  &  /  stories  /  >>  {are:"ions"}
*  ["these"]  +  /expressions/  <<  {are:"too" }
/  ["write"]  %  /them as you/  |   {see:"fit" }
>  ["using"]  >= /  any of   /  <=  [  "these" ]
<     17      == / compatible/  !=  "operators!"
```

**hip-hop** operator overloading `toString()` enables expressing sentences & phrases with
**ions** punctuated by the `+` operator, but overloading `valueOf()` enables even more
[punctuation](#punctuation) and is less likely to be otherwise implemented & invoked, so
overloading `toString()` is not recommended:

```javascript
Object.prototype.valueOf // vs .toString
= function hop ()
    { console.log (this.say)         /*
    | or do something more profound!  */
    }

var   you = {say:'do you see all the things'}
  ,   can = {say:'we can do'   }
  , write = {say:'if we write' }
  ,  code = {say:'our code'    }
  ,    as = {say:'as groups of'}
  , prose = {say:'phrases & sentences?! 🤓'}

'With orion' + you + can + write + code + as +
 prose;
```

**flow**

During **hip-hop** operator overloading, an attempt is made to
[convert an **ion's** object operand to a number](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
That conversion attempts to invoke the object operand's `valueOf()` method. If the **ion**
doesn't define that method, JavaScript searches for it along the **ion's**
[prototype path](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects).
For [**lions**](#form) that search begins & ends at their
`prototype`; i.e. `Object.prototype`, `Array.prototype` or `RegExp.prototype`. For
[**orion**](#form) the search may end similarly but begin with the **ion's** inherited object.

`Object`, `Array` & `RegExp` all define `prototype.valueOf()`, so for each **ion** of
those types, their operator causes the relevant type's `prototype.valueOf()` to be invoked
to obtain a
[basic value](https://en.m.wikipedia.org/wiki/Primitive_value)
that's then converted to a number.

Defining custom `Object`, `Array` & `RegExp` `prototype.valueOf()` methods
enables interfacing with JavaScript objects' type conversion flow. That then enables
interacting with all **ions** without requiring direct access to any of them 🤓

```javascript
Object.prototype.valueOf
= function onObject ()
    { this.ion == "some data" // true on 1st ion!
    ; this.ion == "more data" // true on 2nd ion!
    ; this.any == "data kind" // true on 3rd ion!
    }

~ {ion:"some data"}  // 1st ion
+ {ion:"more data"}  // 2nd ion
- {any:"data kind"}  // 3rd ion
```

JavaScript's **hip-hop** operator overloading is a simple & reliable pattern for enabling
**ion** observation & notification. As shown, it can be implemented manually or via
[**ionify**: invoked object notation implemented for you](http://api.ionify.net/),
a flexible, unobtrusive & novel
[api](https://en.wikipedia.org/wiki/Application_programming_interface)
that implements & provides vocabulary for **ion** observation, notification & interaction,
for you.


#### [java](https://en.wikipedia.org/wiki/Java_(programming_language))

Enables [**orion**](#form) via **hot: handled-on-type** operator overloading by
implementing an object type's `toString()` method, which enables overloading the `+`
operation for objects of that type.

See this in-depth
[proof-of-concept](https://github.com/ionify/about/blob/public/api/java/src/net/ionify/java/Hello.java)
for more:

```java
class AnION
  { public String
      ion = null,
      any = null;

    public AnION
      (String ion)
        { this.ion = ion;
        }

    public String
      toString ()
        { ion == "some data";  // true on invoke   ion!
          ion == "more data";  // true on these    ion!
          any == "data kind";  // true on ions     ion!
          return ion || any ;  // or do something else!
        }
  }

class ActIONs
  { public static void
      main (String [] args)
        { AnION invoke   = new AnION ("some data"),
                these    = new AnION ("more data"),
                ions     = new AnION (           ),
                now      = new AnION (           );
                ions.any =            "data kind" ;
          "Let's" + invoke + these + ions + now ;
        }
  }
```


### [python](https://github.com/ionify/about/blob/public/api/python/ion.proof.py)

Enables [**orion**](#form) by applying **hot: handled-on-type** operator overloading via
[numeric type emulation](https://docs.python.org/3.6/reference/datamodel.html#emulating-numeric-types).

See this
[proof-of-concept](https://github.com/ionify/about/blob/public/api/python/ion.proof.py)
for more:

```python
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
```

### [other languages](https://en.wikipedia.org/wiki/Operator_overloading#Catalog)

[Enable](https://stackoverflow.com/questions/4421706/what-are-the-basic-rules-and-idioms-for-operator-overloading#4421719)
[**orion**](#form) via procedural operator overloading of arithmetic, bitwise, relational & equality operators.


## compatibility

[**orion**](#form) & [**hip-hop**](#function)
operator overloading are compatible with all JavaScript environments.
[**lion**](#form) is compatible with all environments implementing
[any edition of the ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
since
[1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).

[JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
environments include all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views &
[runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing any
[ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm).
