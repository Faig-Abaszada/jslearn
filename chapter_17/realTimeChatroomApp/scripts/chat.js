
class Chatroom  {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message) {
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now),
        };
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback) {
        this.unsub = this.chats // yeni otag deyismek lazim olanda bu current kohne roomu listeninin etmeyi dayandirir. unsub meselesi
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
        localStorage.setItem('username', username); // consolda aplication icine baxsaq username-in localstoragede oldugunu gorerik.
    }

    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if (this.unsub) {
            this.unsub();
        }
    }
}
// const chatroom = new Chatroom('music', 'faik');
//
// chatroom.getChats((data) => {
//     console.log(data);
// });






