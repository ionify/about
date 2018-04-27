# ion

**interactive object notation**, is a
[language-independent](https://en.wikipedia.org/wiki/Programming_language)
[syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages))
that enables writing
[data](https://en.wikipedia.org/wiki/Data_(computing))
and
[code](https://en.wikipedia.org/wiki/Source_code)
as independently observable & notifiable
[objects](https://en.wikipedia.org/wiki/Object_(computer_science)).
**ion** is enabled by and activates
[**interactive type conversion**](#interactive-type-conversion),
a programming language capability and software design pattern
[discovered](../story.md)
alongside **ion** by
[Michael Lee](https://github.com/iskitz)
in 2007.


## lion & orion

**ions** combine the
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator)
bitwise-not,
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
and [-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator)
unary operators with [operands](https://en.wikipedia.org/wiki/Operand#Computer_science)
that can be [object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[references](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type),
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer),
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer),
or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals)
literals.

They can be written as **lion**, literal ions:

```javascript
    ~{ }      +{ }      -{ }     // 3 object lions
    ~[ ]      +[ ]      -[ ]     // 3 array  lions
    ~/ /      +/ /      -/ /     // 3 regular-expression lions
```
and **orion**, object reference ions:

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
[relational](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators),
and
[equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_operators)
punctuation.

This example combines fifteen **lions** with the seventeen **ion**-compatible bitwise, arithmetic, relational, and equality punctuation operators:

```javascript
~  /example/  -  /punctuation/
^  ["aesop"]  &  /  stories  /  >>  {are:"ions"}
*  ["these"]  +  /expressions/  <<  {are:"too" }
/  ["write"]  %  /them as you/  |   {see:"fit" }
>  ["using"]  >= /  any of   /  <=  [  "these" ]
<     17      == / compatible/  !=  "operators!"
;
```

As shown, arithmetic punctuation can be any of the
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-addition-operator-plus),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-subtraction-operator-minus),
[*](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mul-operator),
[/](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-div-operator), or
[%](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mod-operator)
operators, bitwise punctuation can be any of the
[&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND),
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
[|](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR),
[^](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR),
[<<](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-left-shift-operator), or
[\>>](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-signed-right-shift-operator)
operators, relational punctuation can be any of the
[&gt;, &gt;=, <, or <=](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-relational-operators-runtime-semantics-evaluation)
operators, and equality punctuation can be the
[== or !=](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-equality-operators-runtime-semantics-evaluation)
equality operators, but only when pairing **ions** with
[primitive](https://en.m.wikipedia.org/wiki/Primitive_value)
values.


## interactive type conversion

**itc** is a programming language capability and
[software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
that enables interacting with objects via their type conversion flow. **ion** is enabled by and activates **itc**.


### hip hop

[JavaScript](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-overview)
supports two **itc** styles, **hip**, held-in-place:

```javascript
~
{ valueOf
:   function hip ()
      { console.log ("hip: held-in-place itc")
      }
}
;
```

and **hop**, held-on-prototype:

```javascript
Object.prototype.valueOf
= function hop ()
    { console.log ("hop: held-on-prototype itc")
    }
;
```

Both styles enable object interaction, observation, and notification by implementing the `valueOf()`
method that javascript calls during an object's
[type conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).

With **hip itc** that method is **held** __in-place__ within an object and observes that
single object's type conversion. With
**hop itc** it's **held** __on__ an object's `prototype` and observes type conversions
of all instances of that specific object type. An **ion** can implement either, or alternate between both.


### flow

During **itc**, an **ion's** operator
[attempts to convert its object operand to a number](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
During that conversion, an attempt is made to call its object's `valueOf()`
method. If an **ion** doesn't define that method, JavaScript searches for
it in the **ion's**
[prototype chain](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects).
For **lions** that search begins and ends at their
`prototype`; i.e. `Object.prototype`, `Array.prototype` or `RegExp.prototype`.
This can differ for **orion** that inherit from other objects.

By default, `Object`, `Array` and `RegExp` all define `prototype.valueOf()`, so
for each **ion** of those types, its operator calls the relevant
`prototype.valueOf()` to obtain a primitive value that's then converted to a number.

Defining custom `Object`, `Array`, and
`RegExp` `prototype.valueOf()` methods enables interfacing with JavaScript objects'
[type conversion](https://en.wikipedia.org/wiki/Type_conversion)
flow which enables interacting with all **ions** without requiring direct access to any of them 🤓

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
;
```

**hip hop itc** provides simple, reliable and compatible
patterns & capabilities for interacting, observing & notifying objects. They can be implemented
manually, as shown, or via
[**ionify: interactive object notation implemented for you**](http://github.com/ionify/ionify/),
an [API](https://en.wikipedia.org/wiki/Application_programming_interface)
that implements **ion** and provides simple vocabulary for **ion** interaction, observation & notification.


## kind

### [aeons](aeons.md)

**array-expressed object notations**:

```javascript
~ [ {say:"Hi!"} ] ;
```

### [aesop](aesop.md)

**array-expressed [storie](stories.md) or phrase**:

```javascript
~ ['Hi!']  <=  /an aesop phrase/
& [/Hi!/]  <=  /an aesop storie/
;
```

### [jems](jems.md)

**json-expressed modules**:

```javascript
~
{ "re":
      { "id": "jem@doma.in"
      , "is": "a json-expressed module"
      , "by": "mike.lee@iskitz"
      , "at": "2017.11.13-08...2007.09-04"
      , "in":
            [   "san-jose.california.usa.earth"
            , "forest-hills.new-york.usa.earth"
            ]
      }
        
, "do":
      [ "an aesop action"
      , /a storie action/
      , {"if":"do.times", "<":7, "do":"do"}
      ]
    
, "an aesop action"
:     "log Hi! #do.times@"
  
, "a storie action"
:     /log Hi! #do.times@/
}
;
```

### [jess](jess.md)

**json-expressed statements**.

```javascript
~ {"say":"Hi!"} ;
```

### [jewels](jewels.md)

**json-expressed, web-enabled languages**:

```javascript
~ {"as":"html",  "body": "Hi!"}
& {"as":"css" , "#body": {"color":"#212CD9"}}
;
```

### [stories](stories.md)

**sentence templates or regular ion expressions**:

```javascript
~ / d('~ . ~')b   <  Hi! /  <= /match action(s)/
| / (sentence) template! /  <= /match sentences/
;
```

### [webi](webi.md)

**web ion**, describes any **ion** or set of ions created for the
[web](https://en.wikipedia.org/wiki/World_Wide_Web). For example, all
[jewels: json-expressed, web-enabled languages](jewels.md), are **webi**.


# compatibility

**orion** and **hip hop itc** are compatible with all JavaScript
environments. **lions** are compatible with all environments implementing
[any edition of the ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
since [1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).

[JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
environments include all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views and
[runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing any
[ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm).
