Section 13: Project - Weather App
    
    
    Project Preview & Setup

* files setup


    HTML & CSS Template

* template from github
    
    
    AccuWeather API

* https://developer.accuweather.com/
* create weather api 
* API Key ne ucundur 
    * biz sorgu gonerende kimi app-i sorgu gonderir bilmesi ucun.
    
* 2 request 2 different endpoints 
    * 1cisi city code almaq ucun 
    8 2cisi city code ile hava meulmati ucun 
* menuda api reference-de 
    * Locations API - for city codes 
        * City Search - for city codes
    * Current Conditions API - for weather news
        * current conditions
    
    
    Get Weather API Call

* getCity cagrildigi yerde getWeather cagrildi
ve city code getWeather-ye verildi getWeatherde 
  melumatlari consola yazdi
    
    
    Updating the Location

* app.js - dom manipulation
* forecast app-den once teyin olunub diqqet!!
         
    
    Object Shorthand Notation
    
    
    Updating the UI

* contains()
* create elemetns with `` and append with innerHTML
    
    
    Destructuring

*  const cityDets = data.cityDets;
   const weather = data.weather;

  // destructure data
  const { cityDets, weather } = data;

* eyer eyni objectden birden cox data cixardib eyni object adi ile deyishkene
atiriqsa bu zaman bunu ist ede bilerik.
    
    
    Weather Icons & images

* setAttribute()
* isDaytime
         
    
    Ternary Operator
