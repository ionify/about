
# vision

Software creation can be automatic & accessible.
[**ion**](ions/ion.md#ion) makes that possible.

## automatic

Software can self-assemble & self-improve if its data & behavior can be programmatically
discovered, inspected & tested for compatibility & quality. **ion** enables defining data &
behavior in this way.

```javascript
~
{ re:
    { id: 'thing@somewhe.re'
    , as: 'a.schema.defined.thing'
    , by: 'mike.lee@ionify.net'
    , on: '2007.09-04'
    , to: '2019.05.30-07'
    , is: +2.3
    , it: "defines an internet-discoverable, versioned, "
        + "schema-defined & inspectable thing."
    }
}
```

## accessible

Software can be created without learning programming language vocabulary or constructs. If
data or behavior can be expressed in code as prose, that should be sufficient for software to
interpret its meaning.

**ion** enables expressing code as prose via words joined or separated by mathematical
operators,

```javascript
each - of - these - words - mean & _do - something;
```

as regular expression literals,

```javascript
~/ each of these words mean & do something /
```

and as one or more strings within an array

```javascript
~[" each of these words mean & do something "]
```

## real

[**ionify**](http://api.ionify.net/) exists to make this vision of automatic & accessible
software creation real. It enables mapping a word, symbol, or group of words and-or symbols to
specific behavior. This mapping enables observing & reacting to objects containing those words
& symbols.

To fully realize this vision, **ionify** will

+ locate & fetch **ions** via the internet

+ enable defining & applying schemas for ion inspection & validation

+ implement & share the ions & words needed to define data & behavior.