Section 17: Project - Real-time Chatroom

    
    135. Project Preview & Setup

* intro
    
    
    136. HTML Template
    
* copied from github

    
    137. Connecting to Firebase

* collection-i mannual yaratmaga ehtiyac yoxdur 
cunki firestore collectionu tapmadiqda hemin collectiona yaradir

    
    
    138. Chatroom Class & Adding Chats

* Class, class metod: addChat, 
* messaji addChat-a gonderdik ama addChat class
instance icindeki propertyleride istifade edib object
  icinde db-ye gonderdi.
    
    
    
    139. Setting up a Real-time Listener

* onSnapshot(snapshot =>   ::::!!!!!!!  RealTime SetUp
* change.doc.data()
* change.type === 'added'
    
    
    140. Complex Queries

* her deyisiklikle biz butun documentleri aliriq
    ferq elemir hansi otaqdayiq filan
* her otaga aid documentleri cagirmaga baxacagiq.  
* where() 3 argument alir.
    * 1.porperty name to access, misalcun bizde 'room'-dir.
    * 2. '==',  triple equal istifade etmirik.
    * 3. this.room
* orderBy('created_at); - siralayir ama gerek firestorddan index create edesen    
    
    
    141. Updating the Room & Username

*

    
    
    142. Creating a ChatUI Class
    
    
    
    143. Formatting the Dates

* distanceInWordsToNow
    
    
    144. Sending New Chats
    
    
    145. Changing Username & Local Storage
    
    
    
    146. Updating the Room
    
    
    147. Testing the App
    
