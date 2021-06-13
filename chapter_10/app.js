const addForm = document.querySelector('.add');
// li yaratdiq ama bunu ul-nin icinde qoymaq ucun grabbed etmeliyik
const list = document.querySelector('.todos');

/*
eventin keanirda generateTemplate yaratdiq cunki to do html-i yazmaq
isteyirik ama bunun hemde reusable olmasini isteyirik
 */
const generateTemplate = todo => {
    // burada create metodu ilede yarada bilerdik ama templ string ile etdik
    const html = `
         <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
    }
})

// trim() butun white space-leri silir inputda qoyulan

