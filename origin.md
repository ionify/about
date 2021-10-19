# ion's tale

Finding beautiful capabilities hidden in plain sight is thrilling 🚀 Realizing they've
existed for decades is humbling 🙇🏾 Sharing them is enlightening 🤎

This is the story of [**ion**: invoked object notation](./ions/ion.md#ion), one such
capability's journey through time.

## decades

One to discover, another to embrace.

**1997**

>[JavaScript's](https://web.archive.org/web/20070916144913/http://wp.netscape.com/newsref/pr/newsrelease67.html)
first language specification is
[published](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf)
👏🏾

**2007**

>[Michael Lee](https://github.com/iskitz),
discovers &
[shares](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee)
a capability within JavaScript he names
[**jsonXD**: json cross-domain](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange)
👨🏾‍💻

**2017**

>Michael names &
[shares](https://d24wuq6o951i2g.cloudfront.net/img/events/id/301/3017276/assets/70d.wtMi_397_IMG_9393_DoDes.jpg)
**jsonXD's** core concept & capability
[**ion**: invoked object notation](ions/ion.md#ion)
&
[**ionify**: ion implemented for you](http://api.ionify.net/) 🎉

## details

In 2003, Michael created
[**ajile**: asynchronous javascript importing & loading extension](http://ajile.net);
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

In 2007, [JSON](https://en.wikipedia.org/wiki/JSON)'s popularity as a web-based
data-interchange alternative to [XML](https://en.wikipedia.org/wiki/XML) was rising. Michael recognized this and was determined to enable cross-domain JSON fetching & interaction via [**ajile**](http://ajile.net) 🚀

Unfortunately, **ajile**-fetched JSON was programmatically inaccessible and its
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

At the time, cross-domain fetching wasn’t possible via the popular but
[same-origin-policy-limited](https://en.wikipedia.org/wiki/Same-origin_policy)
[`XMLHttpRequest`](https://en.wikipedia.org/wiki/XMLHttpRequest)
resource-fetching web API 😔

### jsonp

[JSONP](https://en.wikipedia.org/wiki/JSONP) offered an alternative, but required wrapping
JSON in a `function` call or padding it with a variable or property assignment:

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

Success came in 2007, when through diligent study 👨🏾‍🏫 of the
[JavaScript Language Specification](https://ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf),
and 👨🏾‍🔬 object-literal syntax experimentation, Michael 👨🏾‍💻 discovered it was possible to
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

This pattern

+ is compatible with all JavaScript environments,
+ obsoletes JSONP,
+ complements existing JSONP implementations with **`~`** and **`-`** as
  [compatible, dependable & unobtrusive callbacks](http://api.geonames.org/countryCodeJSON?formatted=true&lat=4.5&lng=59.5&username=demo&style=full&callback=~),
+ and introduces a [universe](http://api.ionify.net/) of applications beyond cross-domain
  JSON fetching & interaction.

## development

After an additional two years of experimentation & implementation, Michael 🙋🏾‍♂️ publicly
introduced this pattern at the 2009
[Ajax Experience](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee)
web developer conference as a cross-domain JSON-fetching solution he named
[**jsonXD**: json cross-domain](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange).

Over the next decade he continued to develop, extend, explore, present, explain &
name

+ [**jems**: json-expressed modules](https://jems.ionify.net/),
+ [**ion**: invoked object notation](ions/ion.md#ion),
+ [**ionify**: ion implemented for you](https://api.ionify.net),
+ [**ionified**: ions indexed for internet-enabled discovery](https://ionified.net) &
+ [**captions**: code-as-prose terminology ions](https://github.com/ionify/ionify/blob/public/README.md#code-prose)

in
[2015](https://github.com/ionify/jems/blob/24ab93d910334e3bbe05b72869cbb4fd81639e10/about/jems.md#what-are-jems),
2016,
[2017](https://d24wuq6o951i2g.cloudfront.net/img/events/id/301/3017276/assets/70d.wtMi_397_IMG_9393_DoDes.jpg) @
[/dev/color/ in motion](https://devcolorinmotion2017.splashthat.com/),
2019, and
[2020](https://web.archive.org/web/20201105010053/https://img1.wsimg.com/isteam/ip/d7a6d14c-7646-43c9-9013-bb6600040f45/Mike%20Lee1.png/:/rs=w:1680,h:975) @
[devopsdays medellín](https://web.archive.org/web/20201027124310/https://devopsdays.io/) 👨🏾‍💻

## distribution

Today, [**ion**](ions/ion.md#ion),
[**ionify**](https://api.ionify.net/),
[**ionified**](https://ionified.net/),
[**jems**](https://jems.ionify.net/) &
[**captions**](https://github.com/ionify/ionify/blob/public/README.md#code-prose)
are **jsonXD's** direct descendants & the basis for the [many kinds](ions/lions.md#lions)
of **ions** now available for inclusion, [discovery](http://ionified.net/),
extension, application & study.

####

**🙇🏾‍♂️ through * God * impossible -is- nothing 🤎**

**[🇬🇾](https://en.wikipedia.org/wiki/Guyana) [mike 👨🏾‍💻 lee](https://github.com/iskitz) & [team](https://github.com/orgs/ionify/people)**
