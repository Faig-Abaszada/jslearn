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
        this.chats // bu problemi hell etmek ucun realtime listener-i unsubscribe etmek lazimdir cunki helede inital deyere qulaq asir ve bu this.cats funksiya return edir
            .where('room', '==', this.room) // split rooms
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
        this.room = room; // updateRoom call olunarken verilen argument propertyde room-u update edecek.
        console.log('room updated');
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
