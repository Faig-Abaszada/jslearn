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
* true olanlari icine alir.  
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

* find() - birinci duz gelen deyeri secib dayanir ve hemin deyeri return edir (icinde alir)

    
    Sort Method vs Reverse

* reverse() - butun array itemlerini tersine dizir
* sort() - Destructive-dir !!!! - orginal arayi deyishir.
* sort() - hemde compare function adlanir cunki arrayedki deyerleri muqayise etmek ucun ist edirik.
* sort() - bezen ola bilerki arraydeki itemleri elifaba sirasi ile duzmek lazimdir.
* sort() - PARAMETERSIZ arraye verilerse numbers.sort() names.sort() - 
    * kicikden boyuye ve elfba sirasi ile ile ise stringleri siralacaqdir.
    * VE reqemleri siralayanda itemdeki ilk reqeme baxir ilk reqeme gore sirlaryir buna gore 5 reqemi 30-dan boyuk olaraq siralanir.

* sort() parameter callBacki alir ve callBack icinde A VE B parameterleri olur :
    * sort( (a, b) => {}) - a ve b nedir?
   
        * bu iki parameter qerar verirki hansi array-de birinci olacaq
        * 2 objecti goturur ve onlara a ve b deyir a ustdeki b altdaki
        * return olunan deyer ise -1 , 1 ve 0 olmalidir.
        * itemin birinci olmasi ucun -1 , itemin sonra gelmesi ucun +1 , itemin yerini deyishmemesi ucun ise 0 olmalidir.
        [5,15,10,] : [5](5-15= -10  5-10= -5) en kicik -10 , [15](15-5= 10 15-10= 5) en kicik 5, [10](10-5= 5 10-15= -5)  en kicik -5
          [5, 10, 5]
            * a - b  -> kicikden boyuye sirala.
            * b - a  -> boyukden kiciye sirala.
        bir reqemi goturur ve butun diger reqemlerden cixir  alinan menfi reqemlerin sirasina gore arraydaki reqemleri siralayir

BONUS:
* sort() - ['a', '5', 'B', 2] ->  2,5, B, a output :)


    Chainin Array Methods

* METODLARI BIR BIRINE CHAIN EDENDE HER DEFE DEYISKEN YARATMAQ LAZIM DEYIL
* ARDICILDA MUMKUNDUR   filter().map()  
