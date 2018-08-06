# ion kinds

## [aeons](aeons.md)

**array-expressed object notations**:

```javascript
~ [ {say:"Hi!"} ] ;
```

## [aesop](aesop.md)

**array-expressed [storie](stories.md) or phrase**:

```javascript
~ ['Hi!']  <=  /an aesop phrase/
& [/Hi!/]  <=  /an aesop storie/
;
```

## [jems](jems.md)

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

## [jess](jess.md)

**json-expressed statements**:

```javascript
~ {"say":"Hi!"} ;
```

## [jewels](jewels.md)

**json-expressed, web-enabled languages**:

```javascript
~ {"as":"html",  "body": "Hi!"}
& {"as":"css" , "#body": {"color":"#212CD9"}}
;
```

## [stories](stories.md)

**sentence templates or regular ion expressions**:

```javascript
~ / d('~ . ~')b   <  Hi! /  <= /match action(s)/
| / (sentence) template! /  <= /match sentences/
;
```

## [webi](webi.md)

**web ion**, describes any **ion** or set of ions created for the
[web](https://en.wikipedia.org/wiki/World_Wide_Web). For example, all
[jewels: json-expressed, web-enabled languages](jewels.md), are **webi**.


