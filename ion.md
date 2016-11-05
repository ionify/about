# ion

**ion:** [**implicit**](http://tfd.com/implicit)
[**object**](https://en.wikipedia.org/wiki/Object_%28computer_science%29)
[**notation**](https://en.wikipedia.org/wiki/Notation#Computing),
is a syntax that enables writing
[javascript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
code and data as independent + observable objects called **ions**.

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

**lion** and **orion** create
[unary expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators)
by combining a
[unary ~](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator), or
[- operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator), with an
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[reference](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type), or
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer),
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer), or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals)
literal operand.

**orion** also create unary expressions when made with a
[unary ++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-increment-operator) or
[-- prefix operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-decrement-operator),
and create
[postfix expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-expressions)
when made with a
[postfix ++](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-increment-operator) or
[-- operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-decrement-operator).


When evaluated, **lion** and **orion** activate the
[implicit numeric conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
of their object operands. That implicit object conversion is the **implicit object**
part of **implicit object notation** and is the behavior at the heart of
**eon: [evaluated-object notification](eon.md)**, the action that enables
object observation + notification.

### compatibility

**orion** are compatible with all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views and
javascript [runtimes](http://en.wikipedia.org/wiki/JavaScript_engine)
implementing [any edition of the ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm).

**lion** are compatible with all environments implementing
[any edition of the ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
since [1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).