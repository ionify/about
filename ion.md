# ion

[**implicit**](http://tfd.com/implict)
[**object**](https://en.wikipedia.org/wiki/Object_%28computer_science%29)
[**notation**](https://en.wikipedia.org/wiki/Notation#Computing)
is a syntax that enables writing
[javascript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
code and data as independent + observable objects called **ions**.

### compatibility

**ions** can be used in all javascript environments. That means all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views +
javascript [runtimes](http://en.wikipedia.org/wiki/JavaScript_engine)
implementing the
[current ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm) or
[any of its previous editions](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
since its [3rd in 1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).

### style

**ions** can be written in two styles, **lion**, literal ion:

```javascript
    ~{ }      +{ }      -{ }     // 3 object lions
    ~[ ]      +[ ]      -[ ]     // 3 array  lions
    ~/ /      +/ /      -/ /     // 3 regular-expression lions
```
and **orion**, object reference ion:

```javascript
    ~obj      +obj      -obj     // 3 prefixed  orion
             ++obj,    --obj     // 2 prefixed  orion
               obj++,    obj--   // 2 postfixed orion
```

### behavior

**lion** and **orion** both evaluate as
[unary expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators)
with a
[unary ~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator), or
[- operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator),
and an
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[reference](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type),
or literal
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer),
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer), or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals)
operand.

**orion** can also evaluate as unary expressions with a
[unary ++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-increment-operator) or
[-- prefix operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-decrement-operator), or as
[postfix expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-expressions) with a
[postfix ++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-increment-operator) or
[-- operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-decrement-operator).


All **ion** operators cause the
[implicit numeric conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
of their object operand. That implicit conversion is the **implicit object**
portion of **implicit object notation** and is the behavior at the heart of
**eon: [evaluated-object notification](eon.md)**, the behavior that enables
**ion** observation.
