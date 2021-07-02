// dom queries
const chatList = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatList); // dom-dan gelen li- taglaridir
const chatroom = new Chatroom('gaming', 'shaun');

// get chats & render
chatroom.getChats(data => chatUI.render(data));
