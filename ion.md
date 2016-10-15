# ion

[**implicit**](http://tfd.com/implict)
[**object**](https://en.wikipedia.org/wiki/Object_%28computer_science%29)
[**notation**](https://en.wikipedia.org/wiki/Notation#Computing)
is a syntax for writing
[javascript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
code + data as independent + observable objects called **ions**.

### Style

**ions** can be written in two styles, **lion**, literal ion:

```javascript
    ~{ }      +{ }      -{ }     // 3  olion: object literal ion
    ~[ ]      +[ ]      -[ ]     // 3  alion: array  literal ion
    ~/ /      +/ /      -/ /     // 3 relion: regular-expression literal
                                 //           ion
```
and **orion**, object reference ion:

```javascript
    ~obj      +obj      -obj     // 3 prefixed  orion
             ++obj,    --obj     // 2 prefixed  orion
               obj++,    obj--   // 2 postfixed orion
```

### Behavior

**lion** and **orion** both evaluate as
[unary expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators)
made of a
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator), or
[~ unary operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
and an
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer),
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer), or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals) literal, or
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[reference](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type)
operand.

**orion** can also evaluate as unary expressions made of a
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-increment-operator) or
[-- prefix unary operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-decrement-operator), or as
[postfix expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-expressions) made of a
[++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-increment-operator) or
[-- postfix operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-decrement-operator).


During **ion** evaluation, each unary or postfix operator causes the
[implicit numeric conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
of its object, array, regular expression, or object reference operand. That
implicit object conversion is the **implicit object** portion of **implicit
object notation** and is at the heart of **eon:
[evaluated-object notification](eon.md)**, the behavior that enables **ion**
observation.

### Compatibility

**ions** can be used in all javascript environments. That means in all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views, and
[runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing the
[current ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm),
or [any of its previous editions](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
since its [3rd in 1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).
