package net.ionify.java;

import java.lang.reflect.Method;

/**
 * @author  Mike.Lee@ionify.net
 * @since   2018.09.16-07...2015.10.29-07.00
 *
 * java reference implementation of ion: invoked object notation.
 * play @ https://repl.it/@iskitz/ionproofjava
 */
public class ION
  { public static  String $      = ""   ;
    public         Object input  = "ION";
    public         String action        ;

    public
      ION ()
        { super ();
        }

    public
      ION (Object input)
        { this ()           ;
          this.input = input;
        }

    public String
      toString ()
        { try
            { Method method = this.getClass          ()
                                  .getDeclaredMethod (action, (Class<?>[]) null);
              method.invoke  (this, (Object[]) null)                            ;
            }
          catch (Exception e)
            { e.printStackTrace ();
            }
		  return " " + input;
        }
  }