# ion

**invoked object notation** enables defining actions & information as observable &
encapsulated software objects:

```javascript
~ {   log  : '👋🏾👨🏾‍💻'  } <= /do transcription/
+ { "json" : "data"  } <= /json information/
& ["natural language"] <= /text information/
```

**ion** was [discovered, defined & developed](https://origin.ionify.net/)
by **[michael lee](https://github.com/iskitz)**
in 2007, and exists & can be implemented within
[procedural](https://en.wikipedia.org/wiki/List_of_programming_languages_by_type#Procedural_languages)
[operator overloading](https://en.wikipedia.org/wiki/Operator_overloading)
languages.

## form

**ion** combines one or more objects with operators that invoke their action(s) and-or
observation.

**ion** combines the
[~](https://262.ecma-international.org/6.0/#sec-bitwise-not-operator)
bitwise-not,
[+](https://262.ecma-international.org/6.0/#sec-unary-plus-operator),
and [-](https://262.ecma-international.org/6.0/#sec-unary-minus-operator)
unary operators, with [operands](https://en.wikipedia.org/wiki/Operand#Computer_science)
that can be
[array](https://262.ecma-international.org/6.0/#sec-array-initializer),
[object](https://262.ecma-international.org/6.0/#sec-object-initializer),
or
[regular expression](https://262.ecma-international.org/6.0/#sec-literals-regular-expression-literals)
literals in [javascript](#javascript), or
[references](https://262.ecma-international.org/6.0/#sec-reference-specification-type)
in **javascript** and other languages.

**ion** can be expressed as [**lion**](lions.md#lions), literal ion:

```javascript
~{ }      +{ }      -{ }     // 3 object lions
~[ ]      +[ ]      -[ ]     // 3 array  lions
~/ /      +/ /      -/ /     // 3 regular-expression lions
```

and **orion**, object reference ion:

```javascript
~obj      +obj      -obj     // 3 prefixed orion
```

**orion** can also be expressed with the
[++](https://262.ecma-international.org/6.0/#sec-prefix-increment-operator)
and
[-- prefix operators](https://262.ecma-international.org/6.0/#sec-prefix-decrement-operator),
and the
[++](https://262.ecma-international.org/6.0/#sec-postfix-increment-operator)
and
[-- postfix operators](https://262.ecma-international.org/6.0/#sec-postfix-decrement-operator):

```javascript
         ++obj,    --obj     // 2 prefixed  orion
           obj++,    obj--   // 2 postfixed orion
```

### punctuation

**ions** can be combined to form larger expressions via
[arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators),
[bitwise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators),
[relational](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators)
&
[equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_operators)
operator punctuation.

this example combines fifteen **lions** with seventeen **ion**-compatible bitwise,
arithmetic, relational & equality punctuation operators:

```javascript
~  /example/  -  /punctuation/
^  ["aesop"]  &  /  stories  /  >>  {are:"ions"}
*  ["these"]  +  /expressions/  <<  {are:"too" }
/  ["write"]  %  /them as you/  |   {see:"fit" }
>  ["using"]  >= /  any of   /  <=  [  "these" ]
<     17      == / compatible/  !=  "operators!"
```

as shown

+ arithmetic punctuation can be any of the
[+](https://262.ecma-international.org/6.0/#sec-addition-operator-plus),
[-](https://262.ecma-international.org/6.0/#sec-subtraction-operator-minus),
[*](https://262.ecma-international.org/6.0/#sec-applying-the-mul-operator),
[/](https://262.ecma-international.org/6.0/#sec-applying-the-div-operator), or
[%](https://262.ecma-international.org/6.0/#sec-applying-the-mod-operator)
operators,

+ bitwise punctuation can be any of the
[&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND),
[~](https://262.ecma-international.org/6.0/#sec-bitwise-not-operator),
[|](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR),
[^](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR),
[<<](https://262.ecma-international.org/6.0/#sec-left-shift-operator), or
[\>>](https://262.ecma-international.org/6.0/#sec-signed-right-shift-operator)
operators,

+ relational punctuation can be any of the
[&gt;, &gt;=, <, or <=](https://262.ecma-international.org/6.0/#sec-relational-operators-runtime-semantics-evaluation)
operators,

+ and equality punctuation can be the
[== or !=](https://262.ecma-international.org/6.0/#sec-equality-operators-runtime-semantics-evaluation)
equality operators when comparing **ions** with
[basic values](https://en.m.wikipedia.org/wiki/Primitive_value).

## function

**ion** is enabled by
[operator overloading](https://en.wikipedia.org/wiki/Operator_overloading)
in multiple languages.

### [javascript](https://262.ecma-international.org/6.0/#sec-overview)

enables **ion** via **hip-hop** operator overloading of the `valueOf()` & `toString()`
methods [invoked](https://262.ecma-international.org/6.0/#sec-toprimitive)
during an
[object's](https://262.ecma-international.org/6.0/#sec-object-type)
[conversion](https://en.wikipedia.org/wiki/Type_conversion)
to a [basic value](https://en.wikipedia.org/wiki/Primitive_value).

**hip: handled-in-place** operator overloading implements the `valueOf()`
method within an object, which enables observing that single object's type
conversion whenever it's expressed with an [operator](#punctuation):

```javascript
~
{ valueOf:
    function hip ()
      { console.log ("hip: handled-in-place")
      }
}
```

**hop: handled-on-prototype** operator overloading implements the `valueOf()`
method on a `prototype` object, which enables observing the type conversions
of all objects sharing that `prototype` whenever they're expressed with an
[operator](#punctuation):

```javascript
Object.prototype.valueOf
= function hop ()
    { console.log ('hop: handled-on-prototype')    /*\
    | enables observing all invoked objects except  |
    | BigInts, Booleans, Dates, Numbers, Strings,   |
    | Symbols & any others that implement their own |
    | valueOf() method.                            \*/
    }

~ { hello : "👋🏾👨🏾‍💻world"}
```

**hip-hop** operator overloading the `valueOf()` method enables expressing &
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

**hip-hop** operator overloading the `toString()` method enables expressing sentences &
phrases with **ions** punctuated by the `+` operator, but overloading the `valueOf()`
method enables even more [punctuation](#punctuation), and since it's less likely than
`toString()` to be otherwise overloaded and-or invoked, overloading `toString()` is **not**
recommended:

```javascript
Object.prototype.valueOf // vs .toString
= function hop ()
    { console.log (this.say)         /*\
    | or do something more profound! \*/
    }

var   you = {say:'do you see all the things'}
  ,   can = {say:'we can do'   }
  , write = {say:'if we write' }
  ,  code = {say:'our code'    }
  ,    as = {say:'as groups of'}
  , prose = {say:'phrases & sentences?! 🤓'}

'with orion' - you - can - write + code - as -
 prose;
```

#### flow

during **hip-hop** operator overloading, an attempt is made to
[convert an **ion's** object operand to a number](https://262.ecma-international.org/6.0/#sec-toprimitive).
that conversion attempts to invoke the object operand's `valueOf()` method. if the **ion**
doesn't define that method, javascript searches for it along the **ion's**
[prototype path](https://262.ecma-international.org/6.0/#sec-objects).
for [**lions**](#form) that search begins & ends at their
`prototype`; i.e. `Object.prototype`, `Array.prototype` or `RegExp.prototype`. for
[**orion**](#form) the search may end similarly but begin with the **ion's** inherited
object.

`Object`, `Array` & `RegExp` all define a `prototype.valueOf()` method, so for each **ion**
of those types, their operator causes the **ion's** inherited `prototype.valueOf()` method
to be invoked to obtain a
[basic value](https://en.m.wikipedia.org/wiki/Primitive_value)
that's then converted to a number.

defining custom `Object`, `Array` & `RegExp` `prototype.valueOf()` methods
enables interfacing with javascript objects' type conversion flow. that then
enables interacting with all **ions** without needing access to any of their
[identifiers](https://en.wikipedia.org/wiki/Identifier_(computer_languages))
🤓

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

javascript's **hip-hop** operator overloading is a simple & reliable pattern for
enabling **ion** observation & notification. it can be implemented manually, as
shown, or via
[**ionify**: invoked object notation implemented for you](http://api.ionify.net/),
a flexible & unobtrusive natural-language
[api](https://en.wikipedia.org/wiki/Application_programming_interface)
that implements & provides vocabulary for: **ion** observation, notification &
interaction, for you.

### [java](https://en.wikipedia.org/wiki/Java_(programming_language))

enables [**orion**](#form) via **hot: handled-on-type** operator overloading by
implementing an object type's `toString()` method, which enables overloading the
`+` operation for objects of that type.

here's an in-depth
[proof-of-concept](https://github.com/ionify/about/blob/public/api/java/src/net/ionify/java/Hello.java):

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
          "let's" + invoke + these + ions + now ;
        }
  }
```

### [python](https://github.com/ionify/about/blob/public/api/python/ion.proof.py)

enables [**orion**](#form) by applying **hot: handled-on-type** operator overloading via
[numeric type emulation](https://docs.python.org/3.6/reference/datamodel.html#emulating-numeric-types).

here’s a
[proof-of-concept](https://github.com/ionify/about/blob/public/api/python/ion.proof.py):

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

[enable](https://stackoverflow.com/questions/4421706/what-are-the-basic-rules-and-idioms-for-operator-overloading#4421719)
[**orion**](#form)
via procedural operator overloading of arithmetic, bitwise, relational & equality
operators.

## compatibility

[**orion**](#form) & [**hip-hop**](#function)
operator overloading are compatible with all javascript environments.
[**lion**](#form) is compatible with all environments implementing
[any edition of the ecmascript specification][⭐️]
since
[1999](https://web.archive.org/web/20221220010935/https://www.ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf).

[javascript][✨]
environments include all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views &
[runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing
[any ecmascript specification][⭐️].

####

🙇🏾‍♂️ through * [**יהוה**](../LICENSE.txt#L1) * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**](https://github.com/iskitz) &
[**team**](https://team.ionify.net/)
🤲🏾

[⭐️]: https://web.archive.org/web/20221204220158/https://www.ecma-international.org/publications-and-standards/standards/ecma-262/
[✨]: https://262.ecma-international.org/
