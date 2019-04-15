;
~
{ re:
    { id:  'todo@ionify'
    , by: ['mike.lee', 'team'  ]
    , on: { 200709   : -4      }
    , to: { 20190415 : -7.0121 }
    , at:  -0.1
    , is:  "ionify's list of bugs, aka problems"
    , we:
        [" were exploring how to avoid bugs caused by objects' property-name conflicts "
        ]
    }

, bugs
:   [" ~id: Generates 1st id set from the middle of ~next.id's range. This'll "
    +"      lead to those ids being reused twice sooner than necessary.       "
    ," ~do: At some point unintentionally does ~window.do ..."
    ," browser developer tools: on breakpoint typing in console causes global "
    +"      functions like alert, confirm, prompt & print to be invoked.      "
    ," ... "
    ]
}
;