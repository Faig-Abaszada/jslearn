Section 4: Functions & Methods

    What are Functions?

* Object - functions is under the object type in our data type
* Functions is for define a block of code which we can  call and execute whenever 


    Function Declarations & Expressions

* invoking the function is call function
* function expression - deyishkene funksiya verdikde
* expression - deyisken yaradib ona string funskiya ve s verdikde buna expression deyilir.
* semicolon - expression-da ; lazimdir ama function() {} da lazim deyil
* bu iki cur yaradilmish funclar eyni cur ishleyirler ama ince bir ferq var bunun adi hoisting-dir
* hoisting - this is : In JavaScript, the default action is for declarations to be moved to the top of the code.
* when function is declared JS is using hoisting to hoist the function to the top of the file

        * ne vaxtki funksiya declareddir yani deyishkene atilmayib bu zaman funskiya en dibde 
        olsa bele JS bu funksiyani en yuxariya cekir ve bunun sayesinde biz funskiyani en axirda 
        teyin etsekde en bashlarda bux funki cagira bilirik.

        * hoisting works with function declaration but i doesn't work with function expressions (variable attached funcs)
        * AMA BUNUNLAR BELE FUNC DECLARE MESLEHET DEYIL
  

    Arguments & Parameters

* function(name) - name is parameters, name burada eslinde bir local deyishkendir.
* speak('Faik') - Faik is Argument
* function(name= 'faik') - default deyer vermek olur
* 
    

    Returning Values

* return
* function deyeri globalda istifade edilecekse globalda deyisken yaradilib onun icinde cagrilmalidir



    Arrow Functions

* without function keyword : var name = () => {}
* bir parameter olduqda moterizleride qoymaya bilerik
* bir setr return var ise bu zaman curly bracket ehtiyacida yoxdur
  ve return-de yazmiriq 
* main difference regular vs arrow functions is : "this" keyword
    

    Functions vs Methods
    
    Foreach Method & Callbacks
    
    Callback Functions in Action
