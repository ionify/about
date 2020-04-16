;
~
{ re:
    { id:  'todo@ionify'
    , by: ['mike.lee', 'team'  ]
    , on: { 200709   : -4      }
    , to: { 20200410 : -7.0357 }
    , at:  -0.1
    , is: "ionify's list of things to do"
    , we:
        [" Will support now:ECMAScript+5.1, wow:ES+Next, old:ES+3 & all:ES-3 where "
        +"   +vers.ion = vers.ion & newer -vers.ion = vers.ion & older             "
        ," Were exploring implementing ~on.do "
        ]
    }

, todo
:   [ { topic
      :   { '[+-]timezoneHour[minuteOffset].year[month[day[hour[minute[second]]]]]'
          :   / ... /
          ||  " ... "
          ||  [     ]
          }

      , topic
      :   { '-7.2019____'
          :   [
              ]
          }

      , concepts
      :   { '-7.20190415'

          :   { moments
              :  {   YYYYMMDD : '[+|-]timezoneHour[minuteOffset][.hour[minute[second]]]' }
                 |'  YYYYMMDD    [.HH[MM[SS]]]'
                 |'  [+-]timezoneHour[minuteOffset].year[month[day[hour[minute[second]]]]]'
                 |'  YYYY[.MM[.DD[.HH[.SS[.MS]]]]][+|-timezoneHour[minuteOffset]]'
                 }

              , versions
              :  [" ? +vers.ion = vers.ion & newer, and -vers.ion = vers.ion & older ? "
                 ," Have ions@doma.in version section that articulates policy "
                 ," Policy sets the minimum moments or major version changes needed to "
                 +" enable returning to a +vers.ion since the -vers.ion that caused a  "
                 +" backwards-compatibility breaking change.                           "
                 ]
              }
          }

      , actions
      :   { '-7.20190930'
          :   "ali: array-literal ion can be a way to pass input to ion"
          +   "functions. If we create an ordered list of activated ions we can"
          +   "recognize or infer when an ali is meant to be input. If ion"
          +   "functions define if they operate before, after, or between"
          +   "inputs we can pass ali's to them at the right time! 🤓 I'm so"
          +   "happy to realize this application and am excited about possibly"
          +   "realizing how to represent functions as a list of act-ions. I'm"
          +   "also realizing that any lion: literal ion could be treated as"
          +   "input and also any ion, it really depends on what input type(s)"
          +   "an act-ion accepts. dation: data ion?"

          , '-4.20190922'
          :   "For all ions that do something when activated, expect those"
          +   "things to be set in a ~do action vs directly on the ion. All"
          +   "other non-re-about info can be directly on the ion."

          , '-8.20181211'
          :   [/ ~on shorthand for action terms with optional parts, e.g. /
              +   {on:'get [in] [then [after]]'}
              +/ would define sensors for these actions /
              +   {get:[], in:'order', then:'action', after:'all'|'any'|'each'}
              +   {get:[],             then:'action', after:'all'|'any'|'each'}
              +   {get:[], in:'order', then:'action'}
              +   {get:[],             then:'action'}
              +   {get:[], in:'order'}
              +   {get:[]}
              ]

          , '+9.20181016'
          :   [" for ~functions like [].pop do pop.ion = [] & [].call ([].ion) "
              ]

          , '-8.20180429'
          :   [/ on ~ion do ~re = re.toString if api.docs config is set true. /
              ]

          , '-8.20171204'
          :   / ~get,in /
              +     { get: 'ion'    || [  'ion', 'script', 'other', 'resource'  ]
                    ,  in: 'order'  ||    'parallel' || 'synonyms'
                    }
              +/ Each host, e.g. web, node, implements ~get sensor optionally	/
              +/ supporting .in modifier for concurrent or consecutive fetch	/

          , '-8.20171113'
          :   / ~on.do... /
              +   { on    : "" | [] |  Function | Object
                  , do    : "" | [] |  Function | Object | / /
                  , all   : Boolean || "all even with errors?"
                  , any   : Boolean || "as many as or 1st success?"
                  , "#"   : Number  || "times or array index?"
                  , prior	: Boolean || "earlier occurrence"
                  }

          , '-7.20170429'
          :   "~can: to indicate what terms an ion can handle,"
          +   " it could help with finding ions by capability."
          +   { can: "add subtract multiply divide square cube" }
          +   { can:/(add|subtract|multiply|divide|square|cube)/}
          }

      , hosts
      :   { '-8.20171130'
          :   [ / vert.x: implement as another host/
              , /nashorn: implement as another host/
              , / jxcore: implement as another host/
              ]
          }

      , modularity
      :   { '-7.20200408'
          :   `@ionify/web.js = ion/on.js + web/get.js`

          , '-8.20171208'
          :   `launch flow: host-->ion+host-->ions-->preferred`

          , '-8.20171113'
          :   [/ Try to always define ions as independent with clear input &    /
              +/ output actions. This enables loading them all at once because  /
              +/ they or another ion can use those actions to coordinate their  /
              +/ behavior. This may need ajile's act-on-past-actions capability	/
              +/ As an example, ionify's flow could be:                         /
              +/   host...ions...object.sensor + rest                           /
              +/ where object.sensor & rest are loaded @ the same time with     /
              +/ object.sensor explicitly first to enable ion observation.      /
              ]
          }

      , organization
      :   { '-8.20181211'
          :   [" move ions/*.test to tools/tests/*.test.js "
              ]

          , '-7.20180925'
          :   [" create github.com/ionify/ionify.js   by renaming github.com/ionify/ionify  "
              ," create github.com/ionify/ionify.py   for ionify's python implementation    "
              ," create github.com/ionify/ionify.java for ionify's java   implementation    "
              ," create github.com/ionify/ionify.[language]/re/ion.md for language-specific ion form & function"
              ," reduce github.com/ionify/about/ions/ion.md to cross-language commonalities like ~+- reference & link to lang-specific ones"
              ]
          }

      , terminology
      :   { '-7.20180922'
          :   / ion: invoked object notation, represents intrinsic observation & /
          +   / notification of objects. It exists within programming languages  /
          +   / that support operator & operation overloading with objects.      /

          +   / js & java support ion via operator overloading. python, and     /
          +   / potentially many other languages, support ion via operator       /
          +   / overloading.                                                     /
          }
      }

  ,   {syntax:
        { 20180426
        : ["syntax: JSON Data Interchange Format:"

          +   "RFC-8259: IETF Spec: https://tools.ietf.org/html/rfc8259"
          +     "Section9: A JSON parser MAY accept non-JSON forms or extensions."
          +     "?..so json-expressed ions: jems, jess & jewels are valid JSON"

          +   "ECMA-404: ECMA Spec: http://www.ecma-international.org/publications/standards/Ecma-404.htm"

          +   "JSON Schema : http://json-schema.org/specification.html"
          +     "Validation: http://json-schema.org/latest/json-schema-validation.html"
          +     "!..could|should use this as ionifys vocab for terms like ~on"

          +   "JSON Pointer: https://tools.ietf.org/html/rfc6901"
          +     "!..could|should use JS Proxies for deep referencing ion values"
          +       "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
          +       "https://youtu.be/sClk6aB_CPk?t=9m26s"
          +       "https://www.ecma-international.org/ecma-262/6.0/#sec-proxy-objects"
          +       "https://tc39.github.io/ecma262/#sec-proxy-objects"
          ]

        , 20180422
        : { methods
          : " like ~method@ionify for defining ~get & its context. "
          }

        , 20170720
        : ["Documentation"

            +    /re: method@ion@domain/
            +    /...details.../

            || [ /re: method@ion@domain/
               , /...details.../
               ]

            || [ "re: method@ion@domain"
               + "...details..."
               ]

            || [`re: method@ion@domain
                 ... details
                `
               ]

          ,"Using arrays allows knowing when multiple comments are part of the same"
          +" group. Without arrays, +storie groups are more challenging to recognize."
          +" +aesop are already arrays so no additional work to enable."
          ]

        , 20170713
        : { returns
          :   `Thinking of how to enable non-NaN ion return values for`

          +      {random:10} <= 7

          +   ` ionify doesn't currently do this in its +{} sensor because it
                senses & activates as many of all known actions as found within
                each which means multiple possible return values but ions evaluate
                as single-value numeric expressions.

                I'll sense when an ion has only one matching action then return that
                singluar value. Multi-action ions can have all results saved in an
                ion.got property that maps actions to their results; initial idea:
              `
          +       { get:"ion@domain", then: {use:"member", as:"mine", in:"wrong.id@domain"}
                  , got: {"get then":"yes", "use as in": {no:"no known ion with wrong.id"}}
                  }
          }

        , 20170711
        : { aesop
          :   [ "as api docs use functionName.re =  /documentation.../"
              , "as comment, can use as          <- /commented inline/  ['~ . ~']"
              ]
          }

        , 20170710
        : { logic
          :   /logic statements can be confusing when mapping to english, e.g./
          +   /    if thing doesn't exist or is not an array or function/
          +   / no if (!thing || !Array.isArray (thing) || typeof thing != "function")/
          +   / ok if (!thing || !Array.isArray (thing) && typeof thing != "function")/

          , compatibility
          :   /Support ECMAScript (ES) 3- via minimal pollyfill for things like/
          +   / Array.pop/
          +   /ES3 was 1st standard implemented by browsers so earlier/
          +   / is more academic or enabling ionify compatibility with/
          +   / ES runtimes implementing earlier, simpler ES specs./
          }
        }

      ,structure:
        {20170717:
          ` ion debugging: disable for ions @ ionify

            Provide a configuration option to enable|disable debugging ionify's
            ions. false: don't log from ions @ionify & maybe don't generate ids
            for them either. Basically make it so anyone debugging their own ion
            won't have to see ionify's core steps unless they want to.

            domain spaces

            Enable ions to set a share property that contains things to share
            within its domain. ionify will combine those things with all others
            already being shared within the ion's domain.
          `
        ,20170711:
          [ `
            ion Type sensor delegator:

            It may be more sensible to create an ion Type sensor delegator that
            ensures all ions have an id & that they & their ionified content have
            a reference to their host ion.

            It may then also make sense to have an ion Type cleanup that removes
            those ion references for memory performance. May be good enough to
            only note this for now & revisit if performance needs to be improved.

            The delegator would do common actions for all ion types then delegate
            to the relevant ion's Type sensor.

            onSensor > normalize [id & link] > onType:

            When a sensor's defined, set its handler as a generated method that
            ensures each of the sensor's ions have an id, have their methods &
            array members linked to that ion, and then call the sensor's defined
            handler.
            `
          ]
        }
      }
    , {20161119:
        [/dox: Create ions sub-directory + move to it/
        ]
      }
    , {20161116: "ionify guarantees that each ion will have this content:"}
          +
          { re: {id: "name[@domain|ip].api", at:"moment"}
                + "Missing info will be set based on the ion's "
                +   "script's | hosts' info [location, timestamp, etc.]"
                ,
            do: [ "1orMoreActions" || oneOrMoreReferences]
                + "ions that do things must have a do: that lists all actions"
                + "do will have a .ion = ion property to maintain scope. All "
                +   "ion actions that're objects will have this property."
                +   "?.ion will be cleared after actions complete"
                + "do will contain the public actions to do with this ion"
                + "Each action will be converted to:"
                +     {action:"name", ion:this, doing:false|true, done:false|true}
                +     "doing is false until set to true once the act begins."
                +     "done  is false until set to true once the act completes."
          }

    , "get: path calculation + resolution"
    +     "extract + use relevant logic from ajile.net"

    , "get@"
    +     { on:
              [["get", "then"]
              , "get"
              ]
          }
    + "get then: gets something then does something"
    +     "? maybe then should be its own word not attached to get"
    +     "? maybe ionify should just handle aesop:free.form.text"
    +         { on: "then"
                  ,
                do:
                  [ {if:"ion"}    // throw handled exception if not to stop do'ing
                  , {if:"ion", is:"aesop", do:"isAesop", else:"isIon"}
                  ]
                  ,
                ion: null         //td: auto create + set by ionify
                  ,
                isAesop:          // use object with numeric members as easier to understand array.
                                  // objects can hold 2^26 more numeric indices than arrays per ES6's spec
                                  // add a ".last" member that maps to its length - 1: getObject().last > getObject() [getObject().length - 1]
                  {1: "in +then's phrase"
                  ,2: "find words +before +then"
                  ,3: "find words +after  +then."   //'.' means the end of a set of steps. each step not ending in a dot means do it after the previous one and before the next
                  ,4: "match +actions to +before words."
                  ,5: "do +actions and keep their +results."
                  ,6: "after all +actions end"
                  ,7: "match +actions to +after words"
                  ,8: "do +actions with +results."
                  }
                  ,
                isIon:
                  [ "in +then's ion"
                  , "match +actions to +do(s)"
                  , {isAesop:[5,6]}
                  , "do all +do action(s), sense when they complete, and keep their +results"
                  , "match +actions to +then(s)"
                  , {isAesop:8}
                  ]
              }

    , "+[] +{do:[]} +etc : should all pass themselves as the context for all sub-actions"

    , "on:matching:"
    + "compare # of on action's terms to # of all known terms, choose the lesser"
    + "for each term, find its longest pattern that matches the on action"
    + "if multiple patterns of the same length match, handle them all"
    + "get the action that matches the pattern and do it"
    + "if the action errors or returns false find next longest matching pattern & do it"
    + "if the action returns true or undefined, success, stop handling that term"
    + "for subsequent terms, skip all patterns found in previously matched terms"

    , "on: performance: Find the most unique + fewest terms per grammar"
    + "    Track frequency of terms within a grammar + other grammars"
    +         {       id: 'web@ionify'
              ,    terms: {get:3, do:1, use:1, log:1}
              , grammars: 4
              }
    + "    Log when multiple grammars use same terms"
    + "       : 75% of actions use {get, do}. Add type + value info for ++speed"
    + "       : Details like the datatype of each term's accepted values"
    + "         or a range or set of accepted values."

    , "on: sensorsmap: Maps each sensor to its id"
    , "on: actiongram: Maps each grammar to its matching action"
    , "on: sensorgram: Maps each actiongram to its matching sensor id"
    , "on: syntaxgram: Maps each unique word + symbol + to a matching grammar"

    , "on: Get each ion's members' names (keys)"
    , "on: Match each ion's members' names with grammars in syntaxgram"
    , "on: Activate grammars matching ion member names, sensormap + actiongram"

    , "re: Make sensor for this action that generates API documents"

    , "do: start action(s): ion's start method"
    , "no:   end action(s): ion's stop  method"
    , "get: do: action(s) done after get completes"
    , "get: Resolve ids to urls + file paths"

    + ["string +template with +namespaced.values"]
    + { fill: "+template's +values"   , from:["..."]}
    + { fill: "+template's +values"   , with:["..."]}
    + { fill: "+template with +values",   in:["..."]}

    + { errors:
         { debug: []
         , error: ["noDOM"]
         ,  info: []
         ,   log: []
         ,  warn: []
         ,   for:
              { noDOM: "+ion.id needs DOM access"
              }
         }
      }
    ] //+ionify.re.todo


, DONE
:   { 'year[.month.day.hour.minute.second][+-]timezoneHours[.minutesOffset]'
    :   [/ ... /
        ]

    , '[+-]timezoneHour[minuteOffset].year[month[day[hour[minute[second]]]]]'
    :   { topic
        :   / ... /
        }

    , '-7.20190415'
    :   / bugs moved to bugs.js /

    , '-8.20181118'
    :   { bugs
        :   "~link no longer relinks ions. Updated to track linked ions."
        }

    , '-7.2018'
    :   { modularity
        :   `
            Achieved via ~share.as.to.
            Was trying to figure what to do next. I want to continue modularizing
            ionify so that it's easier to create new parts. Currently it's still
            more complicated than I'd like to share functionality between sensors
            like on.ion, on.aeon, and on.aesop. Maybe by figuring out how to
            make each it's own module I'll solve this sharing problem. My current
            focus is solving the ionify.sense & ionified dependency shared by
            on.ion, on.sensor, on.aeon & on.aesop.

            Maybe my past idea of creating a shared namespace for ions with the
            same @domain is what I need here but I want to protect against ions
            that falsely claim @domain membership. I don't want to focus too much
            on that but also don't want to create a solution that can't be easily
            extended with that protection.
            `
        }

    , '-7.20180427'
    :   { ionify
        :   { i : /      invoked,    implicit,  interactive/
            , o : /       object/
            , n : /     notation/
            , i : /  implemented, interpreted, introspected, intercepted, interfaced, /
                + /intermediated/
            , f : /          for/
            , y : /          you/
            , is: '      invoked  object  notation  implemented  for  you'
            }
        }

    , "2018.01.04-08"
    :   `Move /info/ & its contents to the ionify/about repo.
            /ionify/about/api/[todo,launch,layout].js
            /ionify/about/ions/[ion,ions].md
            /ionify/about/team/[README,CONDUCT].md & [mike.lee,team].js
        `

    , "2017.11.11-08"
    :   [ `on: id: ion@domain
          `
          +/ ~on: enables sensing ions by their ids. It can currently/
              +
              { on          : "ion@doma.in"
              ,"ion@doma.in": "some action" | Array | Function | Object
              }

          +/...sense ions with their id as a top-level property name but /
          +/ we want to maintain consistent & fast .id access via .re.id,/
          +/ so we'll augment these ions with a .re composed of the same /
          +/ data + a .id field containing the ion's id.                 /
              +
              { "ion@doma.in"
              :   { is: "An ion id'd without having an re.id or id field"
                  , by: "mike.lee@iskitz"
                  , at: "2017.11.11-08"
                  , in: "san-jose.california.usa.earth"
                  }
              }

          +/...but needs to be updated to sense ionify's with re.id or id/
              +
              { re
              :   { id: "ion@doma.in"
                  , is: "An ion id'd without having an re.id or id field"
                  , by: "mike.lee@iskitz"
                  , at: "2017.11.11-08"
                  , in: "san-jose.california.usa.earth"
                  }
              }

          + / It may be best to support ions defining their ids using multiple /
          + / techniques. ionify can convert each to the expected format to    /
          + / support ~on.id & ion.re.id & ion.id access.                      /

        ]
        ,

     "2017.11.11-08":
        [`planning to implement better 'on' action handling as defined below.
          This should free me to move faster & experiment with more constructs with simpler
          code, less special cases and complexity.

          on: 2017.11.06

          get on's sets of terms
          for each set
            remember it & its handler
            for each term
                if it's unique, remember it & its set
          for each new or updated term
            sort its sets in descending length order
         `
        , "on: 2017.11.05"

        , "on:knowing:"
        + "save all term patterns to action set"
        +      {actions:
                  { on    : {onaction:1}
                  ,"on do": {onaction:1}
                  , do    : {doaction:1}
                  , re    : {reaction:1}
                  }
               }
        + "find & save all unique terms"
        + "for each term, keep a list of term patterns"
        +      {terms:
                  {on:
                    [ "type"        <- /on:aside: string means match a known type/
                    , ["on"]        <- /use array, even for 1 term, to match terms/
                    , ["on", "do"]
                    ]
                  ,do:
                    [ ["do"]
                    ]
                  }
               }
        + "for each 'on' action, update each term's pattern list"
        + "sort patterns list in descending length order"
        ]
        ,

      "2016.11.19-08":
        [/ api: Make 0.1 branch/
        ,/ api: Move code in public branch to 0.1 branch/
        ,/ api: Delete code in public branch/
        ,/ api: Add recent changes to 0.1 branch/
        ]
        ,

      "2016.11.17-08":
        /Move re.in to mike.lee@ionify.net + team@ionify.net ions/
        ,

      "2016.__.__-0_":
        `no: Make sensor to disable + enable other sensors; useful for skipping
         re-actions within functions in production code. Could create for use with
         any action.
        `
        ,

      "2016.__.__-0_":
        [/on: update to handle word patterns/
            +
            { on:
               [ ['get','do']
               , ['get','use']
               ,  'get'
               ]
            }
        ]
        ,

      "2016.09.14-07":
        [ "onObject: Ignores "
        ]
        ,

      "2016.09.10-07":
        [ "on: Generate an id for each sensor (sensing ion) that has none"
        ]
        ,

      "2016.09.09-07":
        [ "get: Design its grammars: get [+do] [+use]"
        , "get: Enable sensing it"
        ]
    }
}
;