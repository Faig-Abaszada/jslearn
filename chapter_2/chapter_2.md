* internal vs external script
* alert();  - this is statement and semicolon 
            is marking
            end of it
* console
* let - can be change
* const - not can be change
* var - OLD WAY
* camel case - mean looks like camel :)  
* comments - //, /* */ single vs multi line comments
* data types: 
    * number, streang, boolean,
    * null - set a variable with no real  value || we set it to null
    * undefined - similar with null , both is empty values but 
                 || auto set that is empty
    * object - everything in JS is an Object 
    * symbol - used with objects, later will be explain

            JavaScript is a loosely typed language, meaning you 
            don't have to specify what type of information will 
            be stored in a variable in advance. ... 

* concatenate - string + string
* string methods and properties 
    * property : length character counter 
    * methods : toLowerCase, toUpperCase .... ,
      * lasIndexOf('n') - find index of n 
      * slice(start position, end number) araliqda olan characterleri cixardir
      * substr(start position, how much character long )  
      * replace('m', 'w') change first n with w   

            Function is a snippet of code 
            which performs some kind of specific task.
            Method is just a function that is associated
            with a particular object or data type.

* argument - indexOf('@'); - @ is argument 
 
        number
  
* math operators : +- ,/* ,** ,%, ++--, +=, -=
* order of operration - B I D M A S 
                        (Brackets, Indices, Division/Multiplication, Addition/Subtraction)
* NaN : Not a Number 
* concatenate : string + number + string ... (but best way temp string)

        Template String
  
* `the blog called ${title}` title is var 
* `<h1>${title}</h1> <p>${paragraph content}</p>`
  
        Arrays

* JS is zero based language
* ['word','word','word ']
* array methods : 
    * join(',') stringe cevirib vergul ile ayirir
    * indexOf('arraydeki string') - index deyerini verecek
    * concat(['word','word ']) - arraye yazdigimiz arrayle birlesdirir concat edir
    * push('word') - alters original value - original deyeri deyisdirir. 
                    (hansiki bu deyeri atmisiq onun )
                    buna gorede destructive method adlanir.
      push

    

        Null & Undefined
* null === zero || null + 3 = 3
* null : niye lazim ola biler? meselen form input-da
    submit-den sonra inputlarin icini tezmilemek isteye 
    bilerik bu vaxt input.value = null deye bilerik


        Booleans & Comparisons
* true vs false 
* comparisons :
    * == : beraberdirse
    * != : berbaer deyilse
    * .>, < : boyuk vs kicik
    * .>=, <= : boyuk ve breaber, kicik ve beraber
  

        Loose vs Strict Comparison

* == : (different types can still be equal) this is loose comparison, bosh muqayise
        bunun ucun 5 == '5' eynidir halbuki biri num biri
        stringdir
* === : (different types can not be equal) this is strict comparison

       
        Type Conversion

* Number(array) 
* typeof array // output is data type 



