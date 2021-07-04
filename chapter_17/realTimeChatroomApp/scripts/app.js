




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

// check localStorage for a name
const username = localStorage.username ? localStorage.username : 'anonym :';

/*
    Consolda chatroom yaz chatroom instancesine bax username : anonym olaraq gorunecek.
 */

// class instances
const chatUI = new ChatUI(chatList); // dom-dan gelen li- taglaridir
const chatroom = new Chatroom('gaming', username);
// ama bir problem var her defe app acilanda burdaki default ^ shaun ve gamingler devreye girir ve bizim update etdiyimiz
// deyer sifirlanib olur shaun initila value gelir yani. ve bunun ucun local storage ist etmeliyik


// get chats & render
chatroom.getChats(data => chatUI.render(data));
