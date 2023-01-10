~
{ re:
    { by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {200709.2    : -4     }
    , to: {202212236.2 : -8.1202}
    , do: 'on.storie@ionify transcription'
    , as: 'sensation'
    , go:
        { meet: 'https://meet.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , code: 'https://github.com/ionify/about/blob/public/api/intro/decoupled.js'
        }
    },

  on:'hi',
  hi( ion)
    { /this method is called for each ion//
      /with a 'hi' property & value which//
      /it transcribes via the log action://

      {log: ion.hi}

      ^
      /logs "i'm an ion!" 1st//
      /logs "i'm a json!" 2nd/
    }
}

~ /ion can be in its own local, or remote file/

~ { hi : "i'm an ion!"}  <=  /invoke an object/
~ {"hi": "i'm a json!"}  <=  /invoke some json/