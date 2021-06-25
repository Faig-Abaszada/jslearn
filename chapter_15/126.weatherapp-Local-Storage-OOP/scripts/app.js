// dom manipullation

 const cityForm = document.querySelector('form');
// indexde deyiseceyimiz ana divleri secdik
const card = document.querySelector('.card');
const details = document.querySelector('.details ');
// imgs icons grab elements
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // bezi melumatlari
    console.log(data);

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
    // update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    // console.log(icon);

    let timeSrc = null;
    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src', timeSrc);

    // remove d-none class
    if (card.classList.contains('d-none')) {
         card.classList.remove('d-none');
    }
}

cityForm.addEventListener('submit', (e) => {
    // prevent default action
    e.preventDefault();

    // get city value to show weather
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // updates ui with new city
    forecast.updateCity(city)
        .then(data =>  updateUI(data))
        .catch(err => console.log(err));

    // set localStorage
     localStorage.setItem('city', city);
})

if (localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then( data => updateUI(data))
        .catch(err => console.log(err));
}
