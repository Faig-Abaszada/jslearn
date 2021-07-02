// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room


class Chatroom  {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat(message) {
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
}

/*
 - new chatroom ile clasimizin instancesini yaratdiq ve room , username-ni verdik
 - verdikden sonra chatroom.addChat() deyerek metodu cagirib mesajimizi yazdiq
 */
const chatroom = new Chatroom('gaming', 'faik');

chatroom.addChat('hello everyone').then(() => {
    console.log('chat added');
}).catch(err => {
    console.log(err);
});
