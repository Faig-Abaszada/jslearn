Section 18: More ES6 Features


    Spread & Rest

* Rest - argumentleri array icinde saxlayir, indvidual to array
* Spread - arraydakileri individual olaraq export edir, array to individual

         
    
    Sets
    is new data structure. like array but dont allow dublicates

* new Set(varArrayName); - > array icinde tekrarlar varsa inlari array icinden silir verir.
* once arrayi set-e salib dogru datani saxliyib sonra 'spread' ist edib arraya ceviririk
* [...new Set(namesArray)];
* mutleq cevirmek lazimdir cunki set uzerinde push etmek array metodalri ist etmek olmur.
* const ages = new Set();
  ages.add(20);
    * yeni array yaradilirsa ve tez tez bunun icine item
      daxil olursa ve istesekki tekrar item olmasin  bu sekilde edirik
* new Set uzerinde lentgh veya array metodlari ist ede bilmirik ama bezi metodlar ayrica var      
    * ages.size - length kimidir
    * ages.has(30)
    ages.clear()- butun icindeki silir.

    
    Symbols
    identical but not the same 

* object icinde iki username var ise username key-i symbol icinde versek usernameler eyni olsa bele 
eslinde eyni deyiller ikiside unique-dir
    * const symbolOne = Symbol('Hello i am there');
    *   ninja[symbolOne] = 'faik';
        ninja[symbolTwo] = 'ali';
        * output :  Symbol('Hello i am there') : 'faik'
                    Symbol('Hello i am there') : 'ali'
