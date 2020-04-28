~
{ re:
    { id: 'ask.say@ions.iskitz.net'
    , by: 'mike.lee'
    , on: '2015.07.28-07'
    , to: '2019.05.02-07'
    , in: 'san-jose.california.usa.earth'
    , is:  1.3
    , it: "implements a simple ask & say domain-specific language"
    },

  on:
    ['ask', 'say'],

  ask:
    function ask (ion)
      { ask.with.answer = prompt (ask.with.prep (ion.ask)) || ''
      },

  say:
    function say (ion)
      { alert (say.with.prep (ion.say))
      },

  prep:
    function prep (quote)
      { return quote.replace (/\[answer\]/g, prep.with.answer)
      }
}


~ / Each ask.say ion can be in a separate file /

~ { say: "👋🏾 Hi!"                              }
~ { ask: "What's your name?"                   }
~ { say: "Hi [answer]! I'm Math E. Bot 🤓"     }
~ { ask: "[answer], what's 2 x 2?"             }
~ { say: "[answer]? Really? 🤔"                }
~ { ask: "Can I ask you another question?"     }
~ { say: 'I thought you\'d say "[answer]" 😉'  }