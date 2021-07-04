




const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');

// add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();

    chatroom.addChat(message) // ve unutmayaqki addChat()- bir async funcdir ve asynler her zaman promise return edir buna gore .then ist etmeliyik
        .then(() => { newChatForm.reset() })
        .catch(err => console.log(err))

});

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update name  also chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateUsername(newName);
    // reset the form
    newNameForm.reset();
    // show updated username message
    updateMssg.innerHTML = `
        Your name was updated to ${newName}
    `;

    setTimeout(() => { // settime out ile 3 san sonra yazini sildik ekrandan.
        updateMssg.innerHTML = '';
    }, 3000);
})


// class instances
const chatUI = new ChatUI(chatList); // dom-dan gelen li- taglaridir
const chatroom = new Chatroom('gaming', 'shaun');

// get chats & render
chatroom.getChats(data => chatUI.render(data));
