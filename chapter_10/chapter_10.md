Section 10: Project - Todo List


    Project Preview and Setup

* bootstrap vs fontawesome

    
    HTML & CSS Template

* from github

    
    Adding Todos

* trim()
* reset()
* generateHtml export function


    Deleting Todos

* event DELEGATION ( ul-ye click vermekle sonr if ile kliklenen delete classli
  tagdirse li-ni sil deyirik)
  
* conatains() - e.target.classList.contains(delete)  : eyer delete varidirsa!

* parentElement vs remove  - e.target.parentElement.remove();

    
    Searching & Filtering Todos

* keyup event
* Ferqli Query - document.querySelector('.search input');
* serach ucun func-i outsidedda yaradiriq cunki reusable olmasini isteyirik.

// keyup - inputda her nese yazilanda bir key =  bir callback chalishmasi
// callback chalishanda ise gedib inputun deyerini alib konsola yazdiq
// keyup - inputda bir shey yazildi ama ne yazildini bilmek ucun input.value ile almaliyiq

* deyeri .value ile aldiq her callback fire olanda ama deyeri event.target ilede ala bilerik
