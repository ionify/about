~
{ re:
    { do: {webi:true, interaction:true}
    , as: {sensation:true}
    , id: 'ask.say@ions.iskitz.net'
    , is: 'an ask & say domain-specific-language interaction'
    , by: 'mike.🇬🇾👨🏾‍💻🇺🇸.lee'
    , on: -7.20150728
    , to: -8.20221117
    , at: +3.02
    , in: 'silicon-valley.california.usa.earth'
    },

  on: ['ask','say'],

  ask :function
  ask ( action )
      { ask.with.its.answer =
        prompt (ask.with.its.prep (action.ask))
        ||''
      },

  say :function
  say ( action )
      { alert  (say.with.its.prep (action.say))
      },

  prep:function
  prep( quote )
      { return  quote.replace         (// replace
               (/\[answer\]/g)        ,// [answer]
                prep.with.its.answer  )// 👈🏾 with
      }
}


~ /ask.say interactions can be independent ions/

~ { say: '👋🏾 hi!'                              }
~ { ask: "what's your name?"                    }
~ { say: "hi [answer]! i'm math e. bot 🤓"     }
~ { ask: "[answer], what's 2 x 2?"              }
~ { say: '[answer]? really? 🤔'                }
~ { ask: 'can i ask you another question?'      }
~ { say: 'i thought you\'d say "[answer]" 😉'  }