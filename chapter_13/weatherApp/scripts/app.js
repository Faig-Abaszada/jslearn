// dom manipullation

 const cityForm = document.querySelector('form');



cityForm.addEventListener('submit', (e) => {
    // prevent default action
    e.preventDefault();

    // get city value to show weather
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // updates ui with new city

})
