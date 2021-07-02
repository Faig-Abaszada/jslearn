// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room

// this responsible for managing all of the chatroom data
class Chatroom  {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message) { // metod 1 , async-dir
        // format a chat object
        const now = new Date();
        // making a chat object data comes from Chatroom class
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now),
        };
        // save the chat documents
        const response = await this.chats.add(chat);
        // cox ehtimal return responsa ehtiyac olmayacaq, bu chainin ucundur
        return response;
    }
    getChats(callback) {
        this.unsub = this.chats // ve unsub call oldugunda changes unsubscribe olunur. ve
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                   if (change.type === 'added') {
                       // update the ui
                       callback(change.doc.data());
                   }
                });
        });
    }
    updateUsername(username) {
        this.username = username;
    }
    /*
     - burada room-u update etsekde getChats-da biz helede initial room-u goruruk
    */
    updateRoom(room) {
        this.room = room; // ve this.unsub etdikde burada room-u update edecek ve ddaha listen etmeyecek
        console.log('room updated');
        if (this.unsub) { // eyer unsub setup olunubsa unsub calisacaq. bunu etdikde ama hemde yeni room-dada listen olunmur.
            this.unsub();
        }
    }
}

/*
 - new chatroom ile clasimizin instancesini yaratdiq ve room , username-ni verdik
 - verdikden sonra chatroom.addChat() deyerek metodu cagirib mesajimizi yazdiq
 */
const chatroom = new Chatroom('music', 'faik'); // buradaki room-u goruruk helede

// chatroom.addChat('hello everyone').then(() => {
//     console.log('chat added');
// }).catch(err => {
//     console.log(err);
// });

chatroom.getChats((data) => {
    console.log(data);
});
chatroom.updateRoom('gaming');
