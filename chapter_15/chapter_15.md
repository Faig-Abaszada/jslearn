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

* class User {
  constructor() {
  }
  }

** And now when we say user one is a new user object, we're creating a new blank object.
Then we're setting the value of this to be the object inside here.
And then we finally call the user constructor so that when we call that we're taking the value this
which is the new object and applying this property to it, which is now Mario.
 
        
        
        Class Methods & Method Chaining

* return this; - Class icinde return this etmekle sonra method chain ede bilirik.

        
        
        Class Inheritance (subclasses)

* class inheritance . subclasses olaraqda taninir.
* class newClassName extends oldClassName {} 
* extends ile diger class-in butun funksionalligini ve property , method-larini
  ozunde copyalayir 

*  misalcun Admin useri yaratmaq lazimdir ve adi user ile eyni funksionalliga sahibdir
ama elave olaraq admin user delete ve add etmek funksiylari var bunun ucun
   yeni class yaratmaq lazimdeyil bu yerde 'extends' ist edilir. yani adi userde
   zaten olan sheyleri yeniden admin ucun yaratmaqa ehtiyac yoxdur. extends ile 
   hamisini kopyalayib oz metod ve propertyleride elave ede bilceyik.

* !!! bu admin objectinin deyiskenini ekrana yazdiqda icindeki metodlar
 adi userden ferqli olara proto ve proto yani 2ci proto icindedir? niye?
  bunlari novbeti derse bilceyik!!!
  

* elave property ve methodlari nece elave edek?
    *  deleteUser(user) {) direkt olaraq class icinde yaziriq
    * !!! ama hele property elave etmemisik.













        Super( )
        
        
        Constructors (under the hood)
        
        
        Prototype Model
             
        
        Prototypal Inheritance
             
        
        Built-in Objects
        
        
        Making a Forecast Class (weather app)
