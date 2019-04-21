# ion's tale


Finding beautiful capabilities hidden in plain sight is thrilling 🥳 Realizing they've
existed for decades is humbling 🙇🏾 Sharing them is enlightening 🖤

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
discovers a capability within JavaScript he names
[**jsonXD**: json cross-domain](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange)
👨🏾‍💻

**2017**

>Michael names & shares **jsonXD's** core concepts as
[**ion**: invoked object notation](ions/ion.md#ion)
&
[**ionify**: ion implemented for you](http://api.ionify.net/) 🎉


## details

In 2003, Michael created
[**ajile**: asynchronous javascript importing & loading extension](http://ajile.net);
a Java-like module system for the web that enabled fetching scripts across domains 🤓

```javascript
Namespace ("my.space")
Import    ("needed.Thing")
ImportAs  ("useful.Thing", "Thing2")
Load      ("http://remo.te/script.js")

my.space.Module
= function Module ()
    { var thing1 = new Thing ()
        , thing2 = new Thing2()            /*
    | my module's remaining code goes here  */
    }
```

### json

In 2007, [JSON](https://en.wikipedia.org/wiki/JSON)'s popularity as a web-based
data-interchange alternative to [XML](https://en.wikipedia.org/wiki/XML) was rising. Michael
recognized this and 💡 was determined to enable fetching & interacting with JSON via
[**ajile**](http://ajile.net) to benefit from **ajile's** cross-domain fetching capability. At
the time, that capability was unavailable via the popular but
[same-origin-policy-limited](https://en.wikipedia.org/wiki/Same-origin_policy) [`XMLHttpRequest`](https://en.wikipedia.org/wiki/XMLHttpRequest)
resource-fetching web API.

```javascript
Load ('http://remo.te/some.json')

  //         JSON response
  {       "remote" : "request"
  ,     "responds" : "with this"
  , "inaccessible" : "JSON which"
  ,    "generates" : "a Syntax Error"
  ,  "when loaded" : "as JavaScript"
  }
```

Unfortunately, **ajile**-fetched JSON, was programmatically inaccessible and its object
literal form generated syntax errors 😞

### jsonp

[JSONP](https://en.wikipedia.org/wiki/JSONP) provided an alternative, but required wrapping
JSON in a `function` call or padding it with a variable assignment.

```javascript
Load ('http://remo.te/some.jsonp?call=on')

   // function-wrapped JSONP response
   on ({        "remote" : "request"
       ,      "responds" : "with this"
       ,     "evaluated" : "JSON"
       ,   "passed as a" : "JavaScript Object"
       , "to a possibly" : "invalid on() function"
      })

Load ("http://remo.te/some.jsonp")

   // variable-assignment-padded JSONP response
   var jsonp
     =  {      "remote" : "request"
        ,    "responds" : "with this"
        ,   "evaluated" : "JSON"
        , "passed as a" : "JavaScript Object"
        , "stored as a" : "server-defined variable"
        }
```
Close, but still too removed from valid JSON syntax 🤔

## discovery

Success came in 2007 when Michael discovered 👨🏾‍💻, through diligent
[study](https://ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf)
👨🏾‍🏫 and object-literal syntax experimentation 👨🏽‍🔬, that it was possible to interact with
anonymous objects, like JSON, by invoking & observing notified object type-conversions! 👌🏾

```javascript
Object.prototype.valueOf   // 1: observe
= function onObject ()
    { this.json == "data"  // 3: interact
    }

~  {"json":"data"}         // 2: invoke
~ ({"json":"data"})        // 2: invoke via jsonp
```

**A single-character prefix of `~`, `+`, or `-` was key**, and as close to observable JSON
as anyone could get 🎉

Adding to this beautiful discovery, **`~`**, passed to some dynamic JSONP endpoints, created
observable JSON because those endpoints apply `~` as JSONP's wrapped-function's identifier! 🤓


## development

After an additional two years of experimentation & implementation, Michael
publicly introduced this cross-domain JSON-fetching solution as
[**jsonXD**: json cross-domain](http://www.slideshare.net/iskitz/using-jsonxd-for-crossdomain-json-exchange)
at the 2009
[Ajax Experience](http://web.archive.org/web/20090916010056/http://ajaxexperience.techtarget.com:80/conference/html/speakers.html#MLee)
web developer conference 🙋🏾‍♂️

Over the next eight years he continued to experiment with, prototype, refine &
describe this discovery, defining & announcing

+ [**jems**: json-expressed modules](http://jems.ionify.net/)
+ [**ion**: invoked object notation](ions/ion.md#ion)
&
+ [**ionify**: ion implemented for you](http://api.ionify.net)

in
[2015](https://github.com/ionify/jems/blob/24ab93d910334e3bbe05b72869cbb4fd81639e10/about/jems.md#what-are-jems),
2016 &
[2017](https://d24wuq6o951i2g.cloudfront.net/img/events/id/301/3017276/assets/70d.wtMi_397_IMG_9393_DoDes.jpg)
at the
[/dev/color/ in motion](https://devcolorinmotion2017.splashthat.com/)
software engineering conference 👨🏾‍💻


## distribution

Today, [**ion**](ions/ion.md#ion),
[**ionify**](http://api.ionify.net) &
[**jems**](http://jems.ionify.net/)
are **jsonXD's** direct descendants and the basis for the [many kinds](ions/lions.md#lions)
of **ions** now available to [discover](http://ionified.net/)
learn from, apply & extend.

## be magical: impossible is nothing

🖤
[Michael {aka:'🇬🇾Mike'} Lee](https://github.com/iskitz) 🙌🏾