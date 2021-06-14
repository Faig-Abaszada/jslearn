Section 12: Async JavaScript

    What is Asynchronous JavaScript?
    slide sekiller folderde var.

* how we perform tasks that take some time to do, 
  like requesting data from a database or from an API.
* start something now and finish it later
* ama ilk once eyni zamanli sinxron-u (counterpart synchronous) oyrenek.
    * JS yuxaridan asagiya bir seferde yalniz bir statement calishdira bilir (execute)
    ** For example could have three statements and each statement is run in turn. 
      Now, line two cannot start before line one is finished and 
      line three cannot start before line was finished.
    * misalcun: 3 statement (3 setr kod) var ve her statement sira ile calishdirilir. 
      bu zaman 2ci setr 1ci setr bitmemish baslaya bilmez ve 3cu setrde 2ci setr 
      bitmemish bashalaya bilmez.
      * eshitmish olarsiz JS single threaded lang adlanir (tek sutun kimi)
        ve bu setr meselesi ele bu demekdir .
      * Thread, bir dizi denetim ifadesi gibidir ve aynı anda 
        bu ifadelerden yalnızca biri çalışabilir.  
    * ve bunlarda Synchrone code-un puf noqtesidir.    
    * ve tesevvur edin statementlerden biri database-den data getirir fetching 
     proosesi gedir  ve bu hadise "Blocking Code" Adlanir, cunki bu 
      statement novbeti setrdeki kodu block edir ozu datani getirene qeder, bitene qeder.
      
    * ve ele ssanri tesevvur edinki yuzlerle fetch prosesi var ve bunlarin heresi 2-3 saniyeden olsa performans 0 olar.
    * bu zaman komeyimize "ASYNCHRONE CODE" - GELIR.

* bir şeye şimdi başla ve sonra bitir - DEYE bir sey demisdik 
** to request data, we use an asynchronous function instead. 
  And this means the function can start now and then finish later
  once the data has come back from wherever
* data getirmek ucun , biz asynchrone function istifade edirik. cunki 
    funksiya indi bashlayir ve ne vaxtki data geldi onda funskiya biter yani 
  diger setrdeki funskiyalari data gelen muddetde blocklamaz,
* yani funskiya baslayar ve digerine kecer data gelende ise biter.   
* funskiya icindede callback ist edirik.
we get it from now.
* bes bu nece bash verir : 
    * state1 - state2 - state3 : burada state2 async codedur.
    * satet1 sonra state2 calishir ama browser state2-ni single thread-den 
      kenarda basqa browser hissesinde hell edir
** single thread in another part of the browser.
It also takes a callback function and puts it to one side too, so that it knows how to execute this
later on when the data comes back.
So because this network request has been taken out of.
Threat and is now running in a different part of the browser, JavaScript, can carry on down the queue
and the remaining functions all the while, this is still going on the request for data.
So it continues through these functions.
And then when it receives the data back from the network request and wants the rest of the functions
have been executed, then we're allowed to call this callback function and finish this original function.
So this is the crux of asynchronous programming, starting something now which can be finished later.

* eyni zamanda asycn bir callBack alir ve onuda bir terefe qoyur belelikle daha sonra data geldikde ne edeceyini 
  bile bilir. cunki bu network request single thread-den cixarilib ve ve indi browserin basqa bir bolmesinde calishir.
  ve belelikde bu sayede Javascript  yuxaridan ashagiya dayanmadan kod axisini davam ede bilir hetta request davam etdiyi
  andada.
  ve nehayet 3,4 statemenler davam etdiyi muddetde data gelersen CALLBACK funskiya calishir ve yuxaridaki funksiya artiq 
  bitmish olur.
  
 * sync - blocking code 
 * async - non blocking 
   


    Async Code in Action

* setTimeout() - Asynchronous code example imagine

    
    What are HTTP Requests?
    
    Making HTTP Requests (XHR)
    
    Response Status
    
    Callback Functions
    
    JSON Data
    
    Callback Hell
    
    Promise Basics
    
    
    Chaining Promises
    
    The Fetch API
    
    Async & Await
    
    
    Throwing & Catching Errors
