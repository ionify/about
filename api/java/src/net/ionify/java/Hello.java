package net.ionify.java;

/**
 * @author  Mike.Lee@ionify.net
 * @since   2018.09.16-07...2015.10.29-07.00
 *
 * java ion: invoked object notation sample code.
 */
public class
  Hello extends ION
    { public
        Hello ()
          { super ();
          }

      public
        Hello (Object input)
          { super (input);
          }

      public static void
        main (String[] args)
          { Hello
              you       = new Hello ( "You" ),
              theWorld  = new Hello ("World"),
              ion       = new Hello (       );

            $ += "Hello to"
              +      you
              +      ion
              +   theWorld;
        }

      public void
        go ()
          { System.out.println ("Hello " + input + "!");
          //...do other interesting things here...
          }
}