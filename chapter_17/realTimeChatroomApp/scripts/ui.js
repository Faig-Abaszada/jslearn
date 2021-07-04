// render new chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear() {
        this.list.innerHTML = '';
    }
    /*
     - reder() metodu cagrildiqda html create edib sehifede gosterecek
     - reder-e verilen data - app.js icinde cagrilan getChats-dan gelen Callbackdir
    */
    render(data){
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix:true }
        );
        const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</span>
      </li>
    `;
        this.list.innerHTML += html;
    }
}
