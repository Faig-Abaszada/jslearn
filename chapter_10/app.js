const addForm = document.querySelector('.add');
// li yaratdiq ama bunu ul-nin icinde qoymaq ucun grabbed etmeliyik
const list = document.querySelector('.todos');
// search ucun Ferqli querying
const searchInput = document.querySelector('.search input');

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
        addForm.reset();
    }
})
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

// burada ul icindeki hansi li-leri gostermek lazimdir hansilari yox
//
const filterTodos = (term) => {
    // bu bize html collection verdi ama biz bunun uzerinde foreach ede bilmirik
    // console.log(list.children);
    // bu yol ile ul-nin child-larini yani html collectionu -u
    // array icine ceke bildik
    // ve artiq proto-sunda istifade ede bileceyimiz metodlara baxa bilerik.
    // bunlarda biri bize lazim olan filter
    // console.log(Array.from(list.children));

    Array.from(list.children)
        //birada to do : her bir li tagdir
        .filter((todo) => {
            // li icinde span olsada textcontent yenede ishleyir
            // console.log(t odo.textContent);
            // return true;

            // ! nida isaresi qoyduq ama niye :
            // cunki biz hansilar uygun gelmir onlara display none demek ----
            // isteyirik , uygun gelenleri ekranda goster demek istemirik ona gore
            return !todo.textContent.includes(term);
        })
}

// keyup - inputda her nese yazilanda bir key =  bir callback chalishmasi
// callback chalishanda ise gedib inputun deyerini alib konsola yazdiq
// keyup - inputda bir shey yazildi ama ne yazildini bilmek ucun input.value ile almaliyiq
searchInput.addEventListener('keyup', (e) => {
    const term = searchInput.value.trim();
    filterTodos(term);
})
// trim() butun white space-leri silir inputda qoyulan

