// dom manipullation

 const cityForm = document.querySelector('form');
// indexde deyiseceyimiz ana divleri secdik
const card = document.querySelector('.card');
const details = document.querySelector('.details ');
// imgs icons grab elements
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructure data
    const { cityDets, weather } = data;

    // update details template
    details.innerHTML = `
             <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText }</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;${weather.Temperature.Metric.Unit }</span>
            </div>
    `
    // remove d-none class
    if (card.classList.contains('d-none')) {
         card.classList.remove('d-none');
    }
}

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
    };

}

cityForm.addEventListener('submit', (e) => {
    // prevent default action
    e.preventDefault();

    // get city value to show weather
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // updates ui with new city
    updateCity(city)
        .then(data =>  updateUI(data))
        .catch(err => console.log(err));
})
