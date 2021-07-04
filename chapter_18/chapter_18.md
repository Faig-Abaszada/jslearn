Section 18: More ES6 Features


    Spread & Rest

* Rest - argumentleri array icinde saxlayir, indvidual to array
* Spread - arraydakileri individual olaraq export edir, array to individual

         
    
    Sets

* new Set(varArrayName); - > array icinde tekrarlar varsa inlari array icinden silir verir.
* once arrayi set-e salib dogru datani saxliyib sonra 'spread' ist edib arraya ceviririk
* [...new Set(namesArray)];
* mutleq cevirmek lazimdir cunki set uzerinde push etmek array metodalri ist etmek olmur.
* const ages = new Set();
  ages.add(20);
    * yeni array yaradilirsa ve tez tez bunun icine item
      daxil olursa ve istesekki tekrar item olmasin  bu sekilde edirik


    
    Symbols
