Section 16: Databases (Firebase)


        127. NoSQL Databases

* Storing Data
    * SQL databases
        * Tables 
        * Rows
        * Columns
    * noSQL databases ( JS ile ddaha yaxsi ishleyir ) ( Firebase is noSQL DB)
        * Collections
        * Documents
        * Properties

* noSQL DB
    Blogs, User
        * Blogs Collection 
            * document
            * document
                * Document {
                    title: 'faik',
                    age: 26
                    }

        128. Firebase & Firestore

* Daha cox melumat ucun youtube kanalina bax.
* Firebase is backend as service
* Firebase-de project yaratdiqdan sonra Databa-e klikledikde seni Firestora atir 
* Cloud Firestore - yenidir
* Realtime Database - kohnedir
* Firebase 
    * Collection
    * Document (id)
    * Document inner




        129. Connecting to Firestore

* apiKey - identifier kimidir hara kim tefeinden qosulacagini bildirir.
* config {}
* firebase.initializeApp(firebaseConfig); - 




        130. Getting Collections

* datani fetch etdik promises istifade etdik
* bu datani addrecipe funksiyasina verdik
* funksiya datani ekrana yazdi 



        131. Saving Documents

* collectiona documenti add etdik
* ama add etdikden sonra document sehifede gorunmiur
* ama refresh etsek gorunur eslinde.


        132. Deleting Documents

* db.collection('recipes').doc(id).delete()
* !!!! ama realtime olaraq islinenin ekrandan 
silindiyini gostermir ama db-den silinib .



        133. Real-time Listeners



        134. Unsubscribing
