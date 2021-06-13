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
            return !todo.textContent.toLowerCase().includes(term);
        })
        // forEach elave etdik cunki uygun gelmeyenler bir arraydedir ---
        // ve bunlara biz filetered classi vereceyik  display none etmek ucun
        // inspect edib gore bilerikki search-da ile uygun gelemeyen  ---
        // array item-ine avtomatik class verilir
        // ama bir problem var: search-dan herfi silende , classda li-den silinmir.
        .forEach((todo) => {
              todo.classList.add('filtered');
        })

    // problem var idi search-dan herfi silende , classda li-den silinmirdi
    // bunun ucun onceki kimi edirik  uygun gelmeyenlere 'add' edirkdik
    // indi ise uygun gelenlerden classi 'remove' edirik.
    // bele etdik cunki her silindikce bu prosese tutulur eyer hemin li ---
    // uygundursa ondan class-i silir cunki silmek duymeside keyup eventdir ona gore
    Array.from(list.children)
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => {
            todo.classList.remove('filtered');
        })
}

// keyup - inputda her nese yazilanda bir key =  bir callback chalishmasi
// callback chalishanda ise gedib inputun deyerini alib konsola yazdiq
// keyup - inputda bir shey yazildi ama ne yazildini bilmek ucun input.value ile almaliyiq
searchInput.addEventListener('keyup', (e) => {
    const term = searchInput.value.trim().toLowerCase();
    filterTodos(term);
})
// trim() butun white space-leri silir inputda qoyulan

