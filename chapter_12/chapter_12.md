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

* blog postlarin , user data , productlarin oldugu bir databasden - yani
xarici serverden datani browsere ggetirmek ucun HTTP request-den istifade edirik.
* http ile sorgu gondermek ucun serverde olan
  her hansi bir backendde yazilmis API endpoint olaraq taninan ( like urls) 
  adrese request gonderirik.
* requestden bize gelen data (response)   JSON formatinda olur.
* https://jsonplaceholder.typicode.com/ -> to play api endpoint
* bu api url-sini browserde linkde acsaq json formatinida melumatlari gorerik
  
* http request vs response(data).


    Making HTTP Requests (XHR)

* new XMLHttpRequest(); - bizim ucun request objecti yaradir.
    * Xml jsondan evveller ishledilirdi ama bu request object butun 
    data novleri ile ishleyir xml, json, plaintext
      
* .open('GET', 'APIendpoint'); 
* .send();
* readyStateChange - 1 2 3 ve 4 state verir bize
* responseText


    Response Status

* izah commentlerde


    Callback Functions
    argument olaraq verilen arrow function callback funciondir ve asynchrone-dir

* izah commentlerde
* Async Code yoxladyaq. // 1 2 3 4 Callback fired

    
    JSON Data
    JS Object Notation (beacuse like objects)

* json faylina baxdigimizda JS objecti kimi gorunur ama ele deyil onlar stringdir
* json zaten string olmalidir cunki browser datani server ile deyishende 
    bu text formatinda olmalidir. buna gore json ist edirik.
* ama biz bu datalari sehifede gostermek ucun onlara accessimiz olmalidir 
buna gore biz json icindeki stringleri js objectine cevirmeliyik.
* JSON.parse ile json stringini js objectlerine
  cevirdik 
* parse sayesinde js objectlerini cycle edib ekrana yaza bilerik.

* todos.json json fayli yaradiriq.
* js objdan ferqi key ve value  double quote icinde olmagidir 

     * It's a way of transferring data between server and client.
    

    Callback Hell
    callback icinde callback ishletmek callback hell adlanir.
    or nesting callback

* biz datani bir addresden aldiq, eyer bir nece adresee alsaq nece olacaq?
    * 3 daxili json fayli var
    * 1ci ucun requestden data geldikden sonra 2ci sonra 3cu , gozleye gozleye 
      requestler getsin biri data ile done olduqdan sonra digeri reuqest olsun

*  nesting callback within callback, within callback callback hell adlanir 
ama yaxsi gorunmur buna hell yolu promises novbeti dersde var.
* messy, unmaintainable, and it's just not a good idea. very baddd!!!


    Promise Basics

* resolve, reject, .then, .catch
* callback hell etdik ve gorunush yaxsi deyil maintainable deyil ve pilleken kimi pis gorunusu oldu. 
* new Promise()
* new PRomise((resolve, reject) => {})
* resolve -> call olundusa .then calissin
* reject  -> call olundusa .catch calissin ve ya ikinci arrow function calissin.


    Chaining Promises

* evvelki ssnari kimi eyer 3 endpoint var ise
  callback-daki kimi promisisle nece ede bilerik ?
* return funcName() 
* catch ise bir defe yazilir sonda ve butun retunler ucun ishleyir.
* hansi endpointde errror var ise onun adi consolda yazilir.

    
    The Fetch API
    simple way ( XMLHttpRequest alternative)

* fetch() = XMLHttpRequest()
* JS icinde native olaraq gomuludur
* niye XMLHttpRequest oyrendik?
    * cunki prosesin nece gercekleshdiyini bilmek lazimdir.
* fetch() bize promise return edir
  promise return edib deyirdi : resolve veya reject   

1. Fetch data
2. take Response
3. return response.json ( returns promise !!)    
4. .then ile datani aldiq.


    Async & Await

* makes readable way of chain promises 
* async bize ne qazandirdi? 
    - birincisi butun asinxron funkiyazimizi bir funskiya icinde yazmis olduq
      ve harda ne vaxt istesek cagira bilerik 
    - ikincisi non blockingdir 
    - daha yaxsi oxunaqli gorunur.

!!!! ama kohne browser versionlar bunu desteklemir.

    
    
    Throwing & Catching Errors

* .catch()
* throw new Error();
