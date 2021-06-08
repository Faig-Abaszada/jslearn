Section 6: The Document Object Model

    Interacting with the Browser

* add , change , delete content  with DOM

    
    The DOM Explained

* Console - document yaz bax
* DOM - created by browser  || dom.png
* DOM - once the HTML document is loaded in the browser, the browser 
creates an object which models this content , and this object called
  the document object.
* DOM - HTML document browserde yuklendikde , browser document objecti yaradir 
ve bizim html documenti onun icinde yerlesdirir.
* Properties and Methods : document.url is.  property.getElementById is method  
* root node olan HTML -altinda olan her shey "node" - adlanir.
* h1 - icindeki text ise text node adlanir digerleri element node


    The Query Selector || we can use forEach perfect! || DOM methods 
    
* Quering the Dom 
* document.querySelector('p') - 1ci p tagini sececek. digerlerini ignor edir.
* document.querySelector('.className'); - class ile query edene birincisini secir sadece.
* document.querySelector('div.className') - eyer sehifede basqa elementdede 
    eyni class varsa bu zaman elementinde adini qeyd etmeliyik
* chrome developer toolda selectoru bilmek ucun elemtin uzerinde copy -> copy selector ede bilerik
* document.querySelectorAll('p') - hamisini secir. ve NodeList-de gelir (consola yazsaq gorerik)
    nodeList array kimi gorunur ama array deyil. Array Metodlarini NodeList uzerinde
    istifade ede bilmerik.
* forEach ve [] ve .  - istifade ede bilerik nodeList uzerinde
* document.querySelectorAll('.errors') - errors clasinda olan her sheyi sechir. 
* En Yaxshi seciciler : querySelector('div.className') ve querySelectorAll()  


    Other Ways to Query the DOM || we can't use forEach

* document.getElementById('idName') - single element
* document.getElementsByClassName('className') - 
    * plural elements.
    * HTML collection olaraq consolda yazildi.
    * querySelectAll istifade edende biz nodeList meselesini gorduk bu ikisi eyni gorunur ama eyni deyil.
    * NodeList-deki kimi dot notation ve [] istifade ede bilirk htmlCollection uzerinde ama 
    * ama ForEach istifade ede bilmirik.
* document.getElementsByTagName('p') - 
    * plural elements
    * dot notation ve [] istifde etmek olur
    

    Adding & Changing Page Content

* innerText - property , p.innerText = ''  to change , p.innerText += ''
* innerHTML - icine umumu =, veya elave += ede bilersen
* array-deki insanlari nece browsere yazariq?
    

    Getting & Setting Attributes
    
*  get attr vs set attr
    * grab element
    * element.getAttribute('href');
    * element.setAttribute('href', 'kjjhwjw')

    
    Changing CSS Styles

* title.setAttribute('style', 'margin: 50px') - bu
    usul ile biz movcud style-i overwrite style edirik 
  ama bunu biz istemirik
    * grabbedTitle.style - i consolda biz boyuk css properties- goruruk ama eksereiyyetinin ici boshdur
        ama axtarsaq ashagi scroll etsek doldurdumuz style elementini dolu gore bilerik
    * eyer elementle orange vermishikse : grabbedTitle.style.color -> orange gorerik
    * 2 type styling:
        * overwrite all stylies : title.setAttribute('style', 'color: red');
        * add style to element : title.style.color = 'red';
            * title.style.backgroundColor - camelCase olmalidir
    
* en yaxshi usul novbeti dersde!!!! (class verib class ile stillendirmek bir basha style yazmaq yox)


    Adding & Removing Classes
        
* classList -  grabbedTitle.classList -> icinde olan classlari verecek.
* grabbedTitle.classList.add('error);  -> classlar arasina yeni class elave etdik
* grabbedTitle.classList.remove('error); -> silir.

* her bir p elementinin icinde success varsa succes yoxsa error clasi versin elemente vere rengide ona gore deyishsin

* innerText vs textContent diffrence is : consola yazdirib baxmaq yaxshidir.
    * innerText - visible olanlari gosteriri (eyer h1 icinde 
      display none olan bir element varsa onu gostermir cunki gorsenmir)
    * textContent - invisible elementleride verir
    
* classList.toggle()  - birinci tetbiqinde add edir ikincide ise remove 
    

    Parents, Children & Siblings
    
* a node tree is a visual representation of the DOM and it represents our HTML Page.
* same level nodes is siblings. - that is one type relationship. 
    eyni sevidyyede olan meselen div- icinde h1, p, ul vardir icinde olanlar siblingsdir
* bashqa relationshiplerde var parent ve children   
* bir parent icindeki children-lari nece sece bilerik ? :
    * grabbedParent.children -> buz bize html Collection verer (foreEach ist etmek olmur)
    * HTML Collection-u array-a nece cevire bilerik ist etmek ucun
        * Array.from(grabbedParent.children) ->  [] icinde bize elementleri verecekdir 
        * Array.from - destructive deyil yani yeni value dondurur  yani  grabbedParent.children -> helede HTML Collectiondur 
    Event Basics (click events)
        * forEach - Array.from(grabbedParent.children).forEach()
* bir children-in parentini nece sece bilerik? :
        * grabbedChild.parentElement
* sibling relationship :    
        * grabbedChild.nextElementSibling -> children sonraki tag veya elemeti secir
        * grabbedChild.previousElementSibling -> childrenden evvelki tag veya elementi secir
* title.nextElementSibling.parentElement.children -> childan sonrakinin parentinin icindekiler :)))


    Event Basics (click events)

* button.addEventListeners('click', () => { } )
* burada click event ateshlendikde callback funskiya bize avttomatik "event"- objecti verir.
* bu event tetbiq edildiyi elementin butun melumatlarina sahib olru ve event.filanInfo deyib baxa bilerik consolda 
* bu event browser terefinden yaradilir


    Creating & Removing Elements

* grabbedElement.remove()
* document.createElement('li') - li tag yaradilmasi string icinde her defe <li> yaratmaqdansa
* ul.append(li); - elave edilme    
* ul.prepend(li) - evvele insert edir
* amma lakin ancaq biz yeni yaradilmish li-lere click edib remove ede bilmirik: 
    * cunki biz artiq kohne li-lere eventlistnerler elave etmishik ama sonradan gelenlere bu proses tetbiq edilmir




    
    Event Bubbling (and delegation)
        
    
    More DOM Events
        
    
    Building a Popup
        
