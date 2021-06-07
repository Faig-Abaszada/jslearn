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
    
    
    Adding & Removing Classes
        
    
    Parents, Children & Siblings
        
    
    Event Basics (click events)
        
    
    Creating & Removing Elements
    
    
    Event Bubbling (and delegation)
        
    
    More DOM Events
        
    
    Building a Popup
        
