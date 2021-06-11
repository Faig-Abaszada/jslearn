Section 8: Project - Interactive
Ninja Quiz
    
    Project Preview & Setup

* 

    
    Bootstrap Basics
 
* install bootstrap


    HTML Template

* top vs quiz section html created


    Checking Answers

* form grabbed
* preventDefault
* ilkin user score yaradildi
* user cavalari array-i yazildi ve id-leri vasitesile deyerleri cagrildi
* elimizde dogru cavablar ve user cavablari var

* user cavablarini forEach-e saldiq 
* user cavablarinda parameter olaraq indexe everdik cunki 
    dogru cavablarla qarsilasdirmaqda bize lazimdir.

*  if (answer === correctAnswers[index]) :
    * eyer userin verdiyi STRING cavabin arraydaki indexi ile
        correctAnwer-deki index ile STRING eynidirse
* yaniki userinde cavablari sirali olaraq arraya duzulub
  dogru cavablarda sira ile arraye duzulub 
  bunlari qarshilasdirmaq ucun 
    
    * dogru forEach bir bir userCavablarinin icine girib
    ozu iel answer ve index cixardir
    * ve index ile correct anwerdeki STRINGI alir  
  

* eyer if statement true olarsa score- a 25 elave etsin


    Showing the Score

* ve score-u ekranda gostermek ucun html yazdiq
* result div-ine d-none deyib gizletdik cunki submit olduqdan sonra gorsenmesini isteyirik


* parent divi class ile grabbed etdik
* grabbed olunmus div-e yeniden querselector
  ile icindeki spani-i grab etdik
* ve textContent = `` ; template strig acdiq
  cunki deyeri variabledir.

* ve classListindinde d-none-i silirik cunki submit-den
  evvel bu class oldugu ucun parent div gorsenmir



    The Window Object

* submit etidyimizde scoru gormek ucun sehife en basha gelmir
* bunun ucun windows objectine baxiriq
* Window object - global object , mother all of the onjects
* Elediyimiz her shey JS-de hamisi window objectinde store olunub.
* console windows edib gormek olar
* outerWidth ile window.outerWidth eyni sheydir amma 
biz yazanda window. yazmiriq ehtiyac yoxdur globa obj olduguna gore.
* console.log - ozu window objda store olunub
* ve windows.console.log - ile eynidir. cunku o avtomatik basha dusulur varsayilan olur.
* window.document.query ile document.query eynidir.


    Intervals & Animating the Score


*
