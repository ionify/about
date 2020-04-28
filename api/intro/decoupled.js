~
{ on:'hi'
, hi (ion)
    { / This method is called for each ion //
      / with a "hi" property. It logs the  //
      / value of that property.             /

    ~ { log:  ion.hi } ;

      / logs "I'm an ion!" 1st //
      / logs "I'm a json!" 2nd  /
    }
}

~ / Each ion can be in its own local or remote file /

~ { hi : "I'm an ion!"}  <=  / invoke an object /
~ {"hi": "I'm a json!"}  <=  / invoke some json /