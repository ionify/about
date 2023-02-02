# ion's tale

Finding beautiful 🧬 capabilities hidden in plain sight is thrilling 🚀 Realizing
they've existed for decades is humbling 🙇🏾‍♂️ Sharing them is enlightening 🤲🏾

This is the story of [**⚛️ ion**: invoked object notation](./ions/ion.md#ion),
one such capability's journey through time.

## decades

One to discover, another to embrace.

**1997**

>[**{✨:javascript}**](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html)'s
first language-specification is
[published](https://web.archive.org/web/20201214012858/https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf)
👏🏾

**2007**

>[Michael Lee](https://github.com/iskitz) is
[🙇🏾‍♂️inspired🤲🏾](LICENSE.txt#L1) to
[share](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee)
a capability within JavaScript he discovers & names
[**jsonXD**: json cross-domain](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange)
👨🏾‍💻

**2017**

>Michael names &
[shares](https://d24wuq6o951i2g.cloudfront.net/img/events/id/301/3017276/assets/70d.wtMi_397_IMG_9393_DoDes.jpg)
**jsonXD's** core concept & capabilities,
[**ion**: invoked object notation](ions/ion.md#ion),
and
[**ionify**: ions implemented for you](http://api.ionify.net/) 🎉

## details

In 2003, Michael created
[**ajile** ♻️ asynchronous javascript importing & loading extension](http://ajile.net);
a java-like module system for the web that enabled fetching javascript across different domains 🤓

```javascript
Namespace ('my.space')
Import    ('needed.Thing')
ImportAs  ('useful.Thing', 'Thing2')

my.space.Module
= function Module ()
    { var thing1 = new Thing ()
        , thing2 = new Thing2()            /*
    | my module's remaining code goes here  */
    }
```

### json

By 2007,
[JSON: javascript object notation](https://en.wikipedia.org/wiki/JSON),
a javascript-compatible data-interchange alternative to
[XML](https://en.wikipedia.org/wiki/XML),
was rising in popularity. Michael recognized this, and was
[🙇🏾‍♂️inspired🤲🏾](LICENSE.txt#L1)
to enable cross-domain JSON acquisition & interaction via
[**ajile**](http://ajile.net) 👨🏾‍💻

Unfortunately, **ajile**-fetched JSON was programmatically inaccessible, and its
object-literal form generated syntax errors 😓

```javascript
Load ('http://remo.te/data.json')

  //         JSON response
  {       "remote" : "request"
  ,     "responds" : "with this"
  , "inaccessible" : "JSON which"
  ,    "generates" : "a Syntax Error"
  ,  "when loaded" : "as JavaScript"
  }
```

At the time, cross-domain acquisition wasn’t possible via the popular but
[same-origin-policy-limited](https://en.wikipedia.org/wiki/Same-origin_policy)
[`XMLHttpRequest`](https://en.wikipedia.org/wiki/XMLHttpRequest)
resource-fetching web API 😔

### jsonp

[JSONP](https://en.wikipedia.org/wiki/JSONP) offered an alternative, but
required wrapping JSON in a `function` call, or padding it with a variable or
property assignment:

```javascript
Load ('http://remo.te/data.jsonp?callback=on')

   // JSONP response: function-wrapped
   on ({        "remote" : "request"
       ,      "responds" : "with this"
       ,     "evaluated" : "JSON"
       ,   "passed as a" : "JavaScript Object"
       , "to a possibly" : "invalid on() function"
      })

Load ('http://remo.te/data.jsonp')

   // JSONP response: variable-assignment-padded
   var jsonp
     =  {      "remote" : "request"
        ,    "responds" : "with this"
        ,   "evaluated" : "JSON"
        , "passed as a" : "JavaScript Object"
        , "stored as a" : "server-defined variable"
        }
```

This was close, but still invalid JSON syntax 🤔

## discovery

Success came in 2007, when through diligent 👨🏾‍🏫 study of the
[JavaScript Language Specification](https://web.archive.org/web/20221220010935/https://www.ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf),
and object-literal syntax 👨🏾‍🔬 experimentation, Michael 👨🏾‍💻 discovered it was possible to
interact with anonymous objects, like JSON, by
[invoking & observing numeric object-type-conversion](ions/ion.md#function)!
👌🏾

```javascript
Object.prototype.valueOf   // 1: observe
= function onObject ()
    { this.json == "data"  // 3: interact
    }

~  {"json":"data"}         // 2: invoke & notify
~ ({"json":"data"})        // 2: invoke & notify via jsonp
```

**A single-character prefix of `~`, `+`, or `-` was key** 🎉 and as close to observable &
syntactically-correct JSON as we could get 👏🏾

This capability

+ obsoletes JSONP,
+ complements existing JSONP implementations with **`~`** and **`-`** as
  [compatible, dependable & unobtrusive callbacks](http://api.geonames.org/countryCodeJSON?formatted=true&lat=4.5&lng=59.5&username=demo&style=full&callback=~),
+ introduces a [universe](http://api.ionify.net/) of applications beyond cross-domain
  JSON acquisition & interaction,
+ and exists within all JavaScript environments 🤓

## development

After an additional two years of experimentation & implementation, Michael 🙋🏾‍♂️ publicly
introduced this capability, at the 2009
[Ajax Experience](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee)
web developer conference, as a cross-domain JSON-fetching solution he named
[**jsonXD**: json cross-domain](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange).

Over the next decade he continued to develop, explore, explain, present, extend &
name

+ [**💎 jems**: json-expressed modules](https://jems.ionify.net/),
+ [**⚛️ ion**: invoked object notation](https://ion.ionify.net/),
+ [**🧬 ionify**: ion implemented for you](https://api.ionify.net),
+ [**🎁 ionified**: ions indexed for internet-enabled discovery](https://ionified.net),
+ [**📖 stories**: stated text of recognition expressions](ions/stories.md#stories) &
+ [**📝 captions**: code-as-prose terminology ions](https://captions.ionify.net/),

in
[2015](https://github.com/ionify/jems/blob/24ab93d910334e3bbe05b72869cbb4fd81639e10/about/jems.md#what-are-jems),
2016,
[2017](https://web.archive.org/web/20181128132649if_/https://d24wuq6o951i2g.cloudfront.net/img/events/id/301/3017276/assets/70d.wtMi_397_IMG_9393_DoDes.jpg) @
[/dev/color/ in motion](https://devcolorinmotion2017.splashthat.com/),
2019, and
[2020](https://web.archive.org/web/20201105010053/https://img1.wsimg.com/isteam/ip/d7a6d14c-7646-43c9-9013-bb6600040f45/Mike%20Lee1.png/:/rs=w:1680,h:975) @
[devopsdays medellín](https://web.archive.org/web/20201027124310/https://devopsdays.io/) 👨🏾‍💻

## distribution

Today
[**💎 jems**](https://jems.ionify.net/),
[**⚛︎ ion**](https://ion.ionify.net/),
[**🧬 ionify**](https://api.ionify.net/),
[**🎁 ionified**](https://ionified.net/),
[**📖 stories**](ions/stories.md#stories) &
[**📝 captions**](https://captions.ionify.net/)
are **jsonXD's** progeny & the foundation of the [many kinds](ions/lions.md#lions)
of **ions** now available for implementation, [discovery](http://ionified.net/),
extension, and [study](LINGO.md#-our-lingo-).

####

🙇🏾‍♂️ through * [**יהוה**][🙇🏾‍♂️ יהוה 🤲🏾] * impossible -is- nothing ||
[🇬🇾👨🏾‍💻🇺🇸](https://en.wikipedia.org/wiki/Guyana)
[**mike lee**][🇬🇾👨🏾‍💻🇺🇸] &
[**team**](https://team.ionify.net/)
🤲🏾

[🙇🏾‍♂️ יהוה 🤲🏾]: https://deal.ionify.net/
[🇬🇾👨🏾‍💻🇺🇸]: https://mike.ionify.net/
