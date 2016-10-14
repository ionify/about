# ion

[**implicit**](http://tfd.com/implict)
[**object**](https://en.wikipedia.org/wiki/Object_%28computer_science%29)
[**notation**](https://en.wikipedia.org/wiki/Notation#Computing)
is a way of writing data and code as observable, self-contained, anonymous
objects. These objects, known as **ions**, are recognized by their styles;
most obvious, literal ions, or **lions**:

```javascript
    ~{ }      +{ }      -{ }      //  oli:  object literal ion
    ~[ ]      +[ ]      -[ ]      //  ali:  array  literal ion
    ~/ /      +/ /      -/ /      // reli: "really"
                                         :  regular-expression literal
                                            ion
```
and less obvious, object reference ions, or **orion**:

```javascript
    ~obj      +obj      -obj
             ++obj     --obj      // prefix
               obj++     obj--    // postfix
```

### usage

In [JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
environments, both **lions** and **orion** are automatically evaluated as
[unary expressions](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-operators).

Each unary expression is made of a
[+](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-plus-operator),
[-](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-unary-minus-operator), or
[~ unary operator](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-bitwise-not-operator),
and an
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-initializer),
[array](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-initializer), or
[regular expression](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-literals-regular-expression-literals) literal, or
[object](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-object-type)
[reference](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-reference-specification-type)
operand. **orion** also use
[unary ++ prefix](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-increment-operator) and
[postfix increment](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-increment-operator) operators and
[unary -- prefix](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-prefix-decrement-operator) and
[postfix decrement](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-postfix-decrement-operator) operators.


During JavaScript evaluation, each unary operator activates implicit numeric
conversion on its object operand. That implicit object conversion is essential
to [what makes **ions** observable](eon.md), despite being anonymous,
and represents the **implicit object** portion of **implicit object notation**.

#### compatibility

**ions** can be used everywhere JavaScript exists, that means in all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views, and
[JavaScript runtimes](http://en.wikipedia.org/wiki/JavaScript_engine) implementing the
[current ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm),
or [any of its previous editions](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
since its [3rd in 1999](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf).
