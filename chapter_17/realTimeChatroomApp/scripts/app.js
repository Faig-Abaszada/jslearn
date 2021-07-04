




const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

// add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();

    Chatroom.addChat(message) // ve unutmayaqki addChat()- bir async funcdir ve asynler her zaman promise return edir buna gore .then ist etmeliyik
        .then(() => { newChatForm.reset() })
        .catch(err => console.log(err))

});

// class instances
const chatUI = new ChatUI(chatList); // dom-dan gelen li- taglaridir
const chatroom = new Chatroom('gaming', 'shaun');

// get chats & render
chatroom.getChats(data => chatUI.render(data));
