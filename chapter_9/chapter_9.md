Section 9: Array Methods

    map creates a new array by transforming every element in an array, 
    individually. filter creates a new array by removing elements that 
    don't belong. reduce , on the other hand, takes all of the elements 
    in an array and reduces them into a single value. Just like map and 
    filter , reduce is defined on Array.


    Filter Method

* array icinde neleri secib ekrana yazmaq isteyirikse bu metodu ist edirik
* NonDestructive -dir original array-i deyismir.
* Yeni array yaradir.
* icindeki deyer mutleq return olunmalidir.
* nondestructive olduguna gore ve original array-i deyismediye gore bize filter
olunmush arraylari vermesi ucun bunu bir deyishkene atmaliyiq.
  
* example 2-de tesevvur edekki userlerdeki premium userleri secmeliyik


    Map Method

* array icinde deyeri update ve secim etmekisteyend bu metodu ist edirik.
* map() - deyeri update edir yeni arraya elave edib return edir .
* arraydeki deyerli deyisib yazdirmaq isteyirkse burda map() ist edirik.

* map creates a new array by transforming every element in an array,
  individually. filter creates a new array by removing elements that
  don't belong. map updates, filter choises :) .
  
* example 2-de biz niye object yaratdiq? :
    * commentlerde yazilib

    
    Reduce Method

* reduce() - different than map vs filter.
* array-daki true olanlarin sayini return edir.
* iki paremeter alir :
    * birincisi iteration yani sayilacaq ve return edilecek olan reqem( number )
    * ikincisi arraydaki itemler
    * sayilacag deyeri ise 2ci parameter kimi reduceye veiririk callBackFunc-in
    yanina reduce(callBack, 0)
    * burada sayilacaq deyer 0-dir  

* uzun soun qisasi aray icindeki seylerin yoxlayib nece eded olugunu bilmek ucundu.

* misalcun:  mario adinda user birden cox scoru onlari toplamaq lazimdir
   ve reduce butun arrayi gezir ve marionun utun xallarini cem edir. (example 2)

    
    Find Method

* 

    
    Sort Method
    
    Chaining Array Methods
