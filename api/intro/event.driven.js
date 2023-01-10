~
{ re:
    { by: ['🙇🏾‍♂️ יהוה 🤲🏾','mike🇬🇾👨🏾‍💻🇺🇸lee','team✨ionify']
    , on: {200709.2    : -4     }
    , to: {202212251.2 : -8.2224}
    , do: 'on.storie@ionify transcription'
    , as: 'sensation'
    , go:
        { meet: 'https://meet.ionify.net/'
        , deal: 'https://deal.ionify.net/'
        , help: 'https://help.ionify.net/'
        , code: 'https://github.com/ionify/about/blob/public/api/intro/event.driven.js'
        }
    },

  on:'event',
  do(  ion  )
    { /log 'it happened!' via the event ion!//
      {log: ion.event} & /stop sensing event//
      { on:'event', no:this.do}
    }
}

~ /this event ion could be in a separate file!/
~ {event: 'it happened!'} <= /invokes an event/