~
{ re:
    { id: 'ask.say@ions.iskitz.net'
    , is: 'an ask & say domain-specific-language interaction'
    , by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {201507283.2 : -7}
    , to: {202212262.2 : -8}
    , at: +3.100
    , in: 'silicon-valley.california.usa.earth'
    , do: 'webi interaction'
    , as: 'sensation'
    , go:
        { meet: 'https://meet.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , code: 'https://github.com/ionify/about/blob/public/api/intro/ask.say.js'
        }
    },

  on: ['ask','say'],

  ask :function
  ask ( action )
      { ask.with.my.answer =
        prompt (ask.with.my.prep (action.ask))
        ||''
      },

  say :function
  say ( action )
      { alert  (say.with.my.prep (action.say))
      },

  prep:function
  prep( quote )
      { return  quote.replace       (// replace
               (/\[answer\]/g)      ,// [answer]
                prep.with.my.answer )// 👈🏾 with
      }
}


~ /ask.say interactions can be independent ions/

~ { say: '👋🏾 hi!'                              }
~ { ask: "what's your name?"                   }
~ { say: "hi [answer]! i'm math e. bot 🤓"     }
~ { ask: "[answer], what's 2 x 2?"             }
~ { say: '[answer]? really? 🤔'                }
~ { ask: 'can i ask you another question?'     }
~ { say: 'i thought you\'d say "[answer]" 😉'  }