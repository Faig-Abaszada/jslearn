Section 15: Object Oriented JavaScript

        
        What is OOP?

* two type array create :
        1)    []
        2)    new Array()
            array constructor function
* two type object create :
        1)   {}
        2)   new Object()
            object constructor object (this constructs a new object)
* everything in javascript is object  
    * ama bu söz texniki olaraq duz deyil.
    cunki jsde bizbir cox data novleri goruruk hansiki onlar object
      deyiller musalcun string numbers booleans ves.
    subut olaraq consolda string deyiskenini yazsaq gorerikki onu ne expand 
      etmek olur nedeki icinde method veya property gorunur.

    * bes nece string object olmadigi halda
       uzerinde length veya tolowercase metodlari ishledirik?
       ( lenght contain etmediyi halda)
        ** JavaScript takes that primitive value and it wraps 
          it temporarily in a wrapper object.
        * JavaScript muveqqeti olaraq objecte cevirir veya objecte sariyir.
          
        * new String('Faik'); - it creates new "string wrapper" object ( stringi objecte sariyan )
            * bunu her defe biz new string demesekde eslinde arxa fonda bu olay donur. 
            * ve indi consolda expand olunan string gore bilerik , 
               hansiki proto ve length-a sahibdir


        Object Literal Recap

* create user constructor and create objects easy


        Classes
        Classes.png

* A class is ike a blueprint for an object 
    ( it describes how one should be made)
*  Classes2.png - de butun yellow red carlarin eyni property ve metodlari var 
* each user could have a unique email and a unique username.
**  So that blueprint for the car maps out all of these properties and its functionality and all cars created
using this blueprint would have those things.
Now, that's not to say that every car should be completely identical.
Some of the properties could be unique to each car, for example, the color of it, some could be red
or this green or this blue, etc. But they still all have a color property.
So when we use this blueprint to create cars, we could specify some options like the color.
We could say we want a new white car or new yellow car or new green car.
* burun masinlarin eyni property ve functionalligi 
  var ama bezilerinin unique deyerleri ola biler meselen 5 masin var eyni 
  model eyni gostericilerde ama rengleri ferqlidir. 
        
        
        Class Constructors
        
        
        Class Methods & Method Chaining
        
        
        Class Inheritance (subclasses)
        
        
        Super( )
        
        
        Constructors (under the hood)
        
        
        Prototype Model
             
        
        Prototypal Inheritance
             
        
        Built-in Objects
        
        
        Making a Forecast Class (weather app)
