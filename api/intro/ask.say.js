~
{ re:
    { id: 'ask.say@ions.iskitz.net'
    , by: 'mike.👨🏾‍💻.lee'
    , on: -7.20150728
    , to: -7.20221031
    , at: +2.00
    , in: 'silicon-valley.california.usa.earth'
    , is: 'an ask & say domain-specific-language interaction'
    },

  on:
    ['ask', 'say'],

  ask :function
  ask (action)
      { ask.with.its.answer = prompt (ask.with.its.prep (action.ask)) || ''
      },

  say :function
  say (action)
      { alert (say.with.its.prep (action.say))
      },

  prep:function
  prep(quote)
      { return quote.replace (/\[answer\]/g, prep.with.its.answer)
      }
}


~ /ask.say interactions can be in separate files/

~ { say: '👋🏾 hi!'                              }
~ { ask: "what's your name?"                    }
~ { say: "hi [answer]! i'm math e. bot 🤓"     }
~ { ask: "[answer], what's 2 x 2?"              }
~ { say: '[answer]? really? 🤔'                }
~ { ask: 'can i ask you another question?'      }
~ { say: 'i thought you\'d say "[answer]" 😉'  }