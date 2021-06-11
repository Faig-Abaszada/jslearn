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

* * ve score-u ekranda gostermek ucun html yazdiq
* result div-ine d-none deyib gizletdik cunki submit olduqdan sonra gorsenmesini isteyirik


* parent divi class ile grabbed etdik
* grabbed olunmus div-e yeniden querselector
    ile icindeki spani-i grab etdik
* ve textContent = `` ; template strig acdiq
 cunki deyeri variabledir.






    Showing the Score

*


    The Window Object

*


    Intervals & Animating the Score


*
