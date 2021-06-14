Section 11: Dates & Times


    Dates & Times in JavaScript
    now date is 13.06.2021

* Date- lerde Object data type-dir.
* Reference typedir , primitive deyil yani objectdir.
* constructor ( oop dersinde deyilecek ) 
* constructor - umumlikde yeni obect yaradir.
* ineteger deyerler verir string deyil.   
* new Date() - we want a new object of this data type.
* new Date() - gigantic all dates 
* new Date().getFullYear() - 2021
* new Date().getMonth() - 5 necenci ay(eslinde iyundur yani ayin indexini gosterir)
* new Date().getDate() - date of the month (iyunun 13-u)
* new Date().getDay() - heftenin gunleri monday-0, tuesday-1 ...
* new Date().getHours() - hal hazirki saat
* new Date().getMinutes() - hal hazirki deqiqe
* new Date().getSeconds() - hal hazirki saniye

* timestamps - 12am 1 yanvar 1970-dan bu gune qeder olan milliseconds :)
    * for compare two dates 
* new Date().toDateString() - Sun Jun 13 2021 (first part of gigantic)
* new Date().toTimeString() -  (second part of gigantic)
* new Date().toLocaleString() -  6/13/2021, 7:36:03 PM


    Timestamps & Comparisons

* blogun yazildigi vaxt 
* ve indiki vaxt
    * 1970-den indiye qeder vaxtdan : milliseconddan
    * 1970-den blogun yazildi vaxta olan : millisocundu 
    * cixanda yerde qalan millisecond ise artiq 
        indiki vaxt ile blogun vaxti arasinda olan milliseconddur.
    * bunlari aya saata cevirende avtomatik blogun yazildigi vaxti
        hemise dugun real gore bilerik.

      
    Building a Digital Clock

* setInterval(funcName, neceSaniye); - sayesinde funskiya her 1sandan bir ishledi
* ve new Date-den aldigimiz saatda ekrana innerHtml ile yazildi

 
    Date-fns Library

* https://date-fns.org/   
* dateFns - objectine indi accessimiz var ve consola dateFns yazib gore bilerik. 
* dateFns.isToday  ->  bize boolean verir conditionlarda ist etmek olar.

* dataFns.format(time, 'MMMM')  - 4X M: Iyun - 3X M Iyn qisa olaraq verir.

* date compare edende TIMESTAMPS IST EDIRDIK
    *  dateFns.distanceInWords(now, before)
    * timestamp-in isini gorur avtimatik 
    * {addSuffix: true} -> age sozunu verir 

* https://date-fns.org/v2.22.1/docs/format - butun numuneler vardir.

