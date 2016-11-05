# eon

**eon: evaluated-object notification** enables object notification via
observation of its conversion to a
[foundational data type](https://en.wikipedia.org/wiki/Primitive_data_type).

### style

In [javascript](http://www.ecma-international.org/publications/standards/Ecma-262.htm),
**eons** have three styles, **hip:** held-in-place

```javascript
  ;
  + { valueOf:
        function eon ()
          { console.log ("hip: held-in-place eon")
          }
    }
  ;
```

**hop:** held-on-prototype

```javascript
  ; Object.prototype.valueOf =
      function eon ()
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
objects of a specific type. Both rely on object type conversion via techniques
like [**ion: implicit object notation**](ion.md).

**hip**, **hop** + **hip hop eons** are simple, reliable + compatible ways to
observe + interact with objects. They can be created manually or with
[**ionify: implicit object notification invented for you**](http://github.com/ionify/ionify),
a set of [**ions**](ion.md) that create an environment for simplified object
observation, notification + interaction.

### compatibility

**eons** are compatible with all javascript environments, specifically, all
[web browsers](https://en.wikipedia.org/wiki/Web_browser), web views +
javascript [runtimes](http://en.wikipedia.org/wiki/JavaScript_engine)
implementing [any edition of the ECMAScript Specification](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm).