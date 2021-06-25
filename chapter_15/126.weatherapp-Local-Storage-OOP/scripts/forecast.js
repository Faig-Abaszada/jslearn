class Forecast {
    constructor() {
        this.apiKey = 'C5A1SfhvUXNbyF5VtwWiJWiPDxdYx73Y';
        this.weatherEndpointURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityEndpointURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        // city code verib weather elde etdik
        const weather = await  this.getWeather(cityDets.Key);
        return {
            cityDets,
            weather
        };
    }
    async getCity(city) {
        const query = `?apikey=${this.apiKey}&q=${city}`;
        const response = await fetch(this.cityEndpointURI + query);
        const data = await  response.json();
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.apiKey}`;
        const response = await fetch(this.weatherEndpointURI + query);
        const data = await  response.json();
        return data[0];
    }

}


