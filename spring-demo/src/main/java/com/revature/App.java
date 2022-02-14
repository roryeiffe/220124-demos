package com.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
        // simple hello world bean:
        ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
        HelloWorld obj = (HelloWorld) context.getBean("helloWorld");
        obj.getMessage();

        // constructor based injection (we can refer to the xml file to confirm)
        Pokemon pokemon1 = (Pokemon) context.getBean("pikachu");
        System.out.println(pokemon1);

        // setter/property based injection
        Pokemon pokemon2 = (Pokemon) context.getBean("poochyena");
        System.out.println(pokemon2);

        // Trainer, injecting non-primitive values:
        Trainer ash = (Trainer) context.getBean("ash");
        System.out.println(ash);
    }
}
