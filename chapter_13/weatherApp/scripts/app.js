// dom manipullation

 const cityForm = document.querySelector('form');

const  updateCity = async (city) => {
    // console.log(city);

    // city code elde etdik
    const cityDets = await getCity(city);
    // city code verib weather elde etdik
    const weather = await  getWeather(cityDets.Key);

    // console.log(cityDets, weather);
    return {
        cityDets,
        weather
    }

}

cityForm.addEventListener('submit', (e) => {
    // prevent default action
    e.preventDefault();

    // get city value to show weather
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // updates ui with new city
    updateCity(city);
})
