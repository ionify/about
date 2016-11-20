# ion

**ion:** [**implicit**](http://tfd.com/implicit)
[**object**](https://en.wikipedia.org/wiki/Object_%28computer_science%29)
[**notation**](https://en.wikipedia.org/wiki/Notation#Computing),
is a [syntax](https://en.wikipedia.org/wiki/Syntax_(programming_languages))
that enables writing [data](https://en.wikipedia.org/wiki/Data_(computing)) +
[code](https://en.wikipedia.org/wiki/Source_code)
as independent, observable
[objects](https://en.wikipedia.org/wiki/Object_(computer_science)),
called ions.

### style
**ions** can be written as **lion**, literal ion:

```javascript
    ~{ }      +{ }      -{ }     // 3 object lions
    ~[ ]      +[ ]      -[ ]     // 3 array  lions
    ~/ /      +/ /      -/ /     // 3 regular-expression lions
```
and **orion**, object reference ion:

```javascript
    ~obj      +obj      -obj     // 3 prefixed orion
```
Both styles create expressions that combine unary, arithmetic + bitwise operators with
[operands](https://en.wikipedia.org/wiki/Operand#Computer_science) that're
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[references](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type), or
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer),
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer), or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals)
literals.

#### unary
[Unary operators](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators),
can be
[~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator), and
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator)
as shown in **lion** + **orion**'s descriptions. **orion** can also have
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-increment-operator) and
[-- prefix operators](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-decrement-operator), and
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-increment-operator) and
[-- postfix operators](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-decrement-operator):

```javascript
             ++obj,    --obj     // 2 prefixed  orion
               obj++,    obj--   // 2 postfixed orion
```

#### arithmetic
[Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators),
can be
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-addition-operator-plus),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-subtraction-operator-minus),
[*](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mul-operator),
[/](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-div-operator), or
[%](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-applying-the-mod-operator):

```javascript
   [ ]  +  { }  -  / /  %  obj  /   { }  *   [ ]    // 6-ion arithmetic expression
```
#### bitwise
[Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators)
can be
[&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND),
[|](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR),
[^](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR),
[<<](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-left-shift-operator), or
[>>](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-signed-right-shift-operator):

```javascript
   [ ]  &  { }  |  / /  ^  obj  <<  { }  >>  [ ]    // 6-ion    bitwise expression
```

### behavior
**ion** expressions activate the
[implicit numeric conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
of their object operands when evaluated. That implicit object conversion is the **implicit object**
portion of **implicit object notation** and is the behavior at the heart of
**eon: evaluated-object notification**, the action that enables
object observation + notification.

# eon

**eon: evaluated-object notification** is a
[software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
that enables object notification by observing the object's conversion to a
[foundational data type](https://en.wikipedia.org/wiki/Primitive_data_type).

### style

In [javascript](http://www.ecma-international.org/publications/standards/Ecma-262.htm),
**eons** have three styles, **hip**, held-in-place:

```javascript
  ;
  + { valueOf:
        function hip ()
          { console.log ("hip: held-in-place eon")
          }
    }
  ;
```

**hop**, held-on-prototype:

```javascript
  ; Object.prototype.valueOf =
      function hop ()
        { console.log ("hop: held-on-prototype eon")
        }
  ;
```

and **hip hop**, a combination of both.

### behavior

**hip**, **hop** + **hip hop eons** enable object observation by implementing
the **```valueOf()```** method that javascript calls during an object's
[type conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-toprimitive).
With **hip eons** that method is **held** __in-place__ within an
object. With **hop eons** it's **held** __on__ an object's **```prototype```**.
And with **hip hop eons** it's held using both styles alternated at runtime.

The difference between **hip** + **hop eons** is that **hip eons** observe a
single object's conversion, while **hop eons** observe conversions for all
objects of a specific type. Both rely on object type conversion via patterns
like **ion: implicit object notation**.

**hip**, **hop** + **hip hop eons** are simple, reliable + compatible
patterns for observing + interacting with objects. They can be created
manually or via
[**ionify: implicit object notation invented for you**](http://github.com/ionify/ionify),
a set of [**ions**](ion.md) providing an api that enables + simplifirs object
interaction, observation + notification.
