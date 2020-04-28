~
{ on: 'event'
, do:
    function someAct (ion)
      { ~{log: ion.event} <= /logs "it happened!"/
      }
}
;
/ This event  ion can exist within another file /
| {event: "it happened!"} <= /activates an event/
;