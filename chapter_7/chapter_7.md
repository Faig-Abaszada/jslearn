Section 7: Forms & Form Events

    Events Inside Forms

* capture data from user
* submit events
* keyboard events 
* regular expressions


    Submit Events

* input type="submit" - dirse clicklendiyinde submit event calishir 
* submit button cliklendikde bu form-u submits edir.  
* submit etdikde DEFAULT olaraq sehife yenilenir bunu engellemek ucun:
    * e.preventDefault();
* input.value
* biz input-uda query ile js-de import etdik ama artiq form-u import etmishikse
    ayrica inputu cagirmaga ehtiyac yoxdur :
    * form.inputID deyerek eynile inputa accessimiz var.
    

    Regular Expression

* Eyer istesekki inputda yazilan deyer space veya symbol filan buna gore ozumuzuz
    ne qebul etdiyimizi bildirmeliyik 
    * https://regex101.com/ ( for test )
    * matching patterns call regular expressions RegEx( short) 
    * ^ninja $ -> ninja ile baslayib ninja ile bitsin demekdir   
    * ^[a-z]$ -> single character ala bilir z-dan z-ye
    * ^[a-zA-Z]$ -> boyuk herfleride goturecek 
    * ^[a-zA-Z]{6-10}$ -> {} icinde reqemler ile 6da kicik 10dan boyuk ola bilmez 
    * ^[a-zA-Z0-9]{6-10}$ -> 0-9 demekle reqemleride artiq yaza bilerik
    * ^[a-zA-Z0-9] -> bunu qisa yoldu noqtedir
      ^.{6-10}$ -> bu demekdirki her herfe= ve reqem ola biler.

        
    Testing RegEx Patterns

* TEST method - pattern.test('username') -> boolean dondurur.
    * test method - RegEx methodudur.
    * /[a-z]{6,]/ -> shaun-u versek ama shaun76376723 olsa beel yene true donur
        cunki esas icinde shaun var vse. yani esas ortasinda shaun var vse
     * bunun qabagini almaq ucun  ^hsdh$ -etmeliyik
* SEARCH method - test methodunun eksidir username.search(pattern) olaraq,
    * ve integer dondurur. false - 1, true 0 dir.   
        * true - sifir ne demekdir : uygun matches olursa demekki 
            meselen username-in birinci herfi matches olduguna gore birinci indexi
            uygun gelir ve 0 yazir
    *  output true olanda sene ilk uygun gelen characterin indexini verir
        uygun gelen deyerin ilk uygunlugu verilen deyerin 4cu indexinde bashlayirsa
       bize 4 verir ve yani truedir , false olanda zaten -1 verir.
    * bu o zaman istifade oluna bilerki bize index lazimdir hansiki oradan match 
        oluguni bilemk isteyende



    Basic Form Validation
        
    Keyboard Events
