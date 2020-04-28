~
{ on:'my.ion@doma.in'
, do: function confirming (ion)
    { / This method is called for each ion with   //
      / an id matching "my.ion@doma.in". It       //
      / confirms the ion developer before         //
      / describing what the ion does.              /

      if (ion.re.by == "a.🇬🇾.developer")
          /log "identifies the intended module"//
          {log: ion.re.it}
    }
}

~ / Each of these ions can be in a separate file /

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇯🇵+🇺🇸.developer'
    , on: '2009.12-08'
    , to: '2019.04.21-07'
    , in: 'san-jose.california.usa.earth'
    , it: "duplicates the intended module's id"
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾.developer'
    , in: 'georgetown.guyana.south-america.earth'
    , it: "identifies the intended module"
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇺🇸.developer'
    , on: '2007.09-04'
    , to: '2009.12-05'
    , in: 'forest-hills.new-york.usa.earth'
    , it: "also duplicates the intended module's id"
    }
}