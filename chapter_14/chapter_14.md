Section 14: Local Storage

    What is Local Storage?
    database in browser itself 

* user sehifeni refresh edirse veya saytdan cixib sonra geri gelirse 
  bu zaman userin daxil etdiyi datani ona gostermek ucun , veya datanin itmemesi
  ucun localstorage-den istifade edirik
  * datani database-de saxlamaq olar
  * ceya localstorage-den sitifade etmek olar , hansiki data
    userin browserinde qalir.   

* in console
    * window ->  expand -> localStorage -> 
        * length -expand edirik ve length property goruruk ve 
          bu storagede ne qeder sey store etmisik onun sayini gosterir
        * __proto__ - burada ise bir nece metodlarimiz var : getItem, setItem kimi 
* localstoragede store holunan her bir datanin key ve value-si olur.
    * value - mutleq  string olmalidir.


    Storing & Getting Data

* localstorage is on window object cunki windows obj global objdir  
    * window.localstorage - boshdursa length sifir edecekdir. (lakin her
      defe windows. lazim deyil windows global olduguna gore inferred olunub  )

* setItem('keyName', 'value')
* getItem('keyName');
* update data - with setItem('sameKeyName'  ) -> overwrite 
 

    Deleting Storage Data

* removeItem() - remove single item
* localStorage.clear() - remove all LS
 


    Stringifying & Parsing Data
 
* string olaraq data veririk dedik bes complex data olaraq
 misaulcun array vermek istesek ne edek?
* complex datani once stringe cevir sonra LS-e gonder veya yaz
* JSON.stringify(todos ) 





    Updating the Weather App
 
