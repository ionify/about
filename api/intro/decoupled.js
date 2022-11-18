~
{ re:
    { do: {transcription:true, stories:true}
    , by: 'mike.🇬🇾👨🏾‍💻🇺🇸.lee@ionify.net'
    , on: -4.200709
    , to: -8.202211180201
    , as: {sensation:true}
    },

  on:'hi',
  hi( ion)
    { /this method is called for each ion//
      /with a 'hi' property & value which//
      /it logs:                          //

      {log: ion.hi}

      /logs "i'm an ion!" 1st//
      /logs "i'm a json!" 2nd/
    }
}

~ /ion can be in its own local, or remote file/

~ { hi : "i'm an ion!"}  <-  /invoke an object/
~ {"hi": "i'm a json!"}  <-  /invoke some json/