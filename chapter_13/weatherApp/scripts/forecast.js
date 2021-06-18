
const apiKey = 'C5A1SfhvUXNbyF5VtwWiJWiPDxdYx73Y';

//get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    // buradaki id 'Current Conditions'-da teleb olunandir
    // api key ise teleb olunan query-dir
    const query = `${id}?apikey=${apiKey}`;

    const response = await fetch(base + query);
    const data = await  response.json();

    // data[0] deyirik cunki helede geleden data array icindedir bize ise object lazimdir.
    return data[0];
}



// get city information
const getCity = async (city) => {

    /*
     - ?(question mark) - menasi adding parameter to the url
     - & - next query paramater adding
     - accuweathe saytinda required olan iki query var apikey ve q
    */

    // bu endpoint city code elde etmek ucun olan endpointdir sonra bu kod ile uygun citynin havasini oyrenecyik
    // endpoint + query( ve elave bizim apikey ve input ile yazagaimiz city adi )
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await  response.json();

    // console.log(data);
    // output olaraq birden cox objectin consola yazildigini
    // goruruk bize lazim olan 1cidir cunki digerleri ozunden atdigi sheherlerdir
    // console.log(data[0]);

    return data[0];

}
// ve burada bize lazim olan shey keydir, consolda objecti acsaq key deyerini  goererik
getCity('baku')
    .then((data) => {
        // console.log(data);
        /* ve data bize sheherin codunu verir data.Key olaraq
           bizde bu key ile hemin sheherin melumatlarini aldiq.
           - return deyerken bu artiq promise return edir ve artiq biz .then() etmleiyik

        */
        return getWeather(data.Key);})
    .then((data) => {
        //buraddaki data artiq getWeather icindeki data[0]- dir
        console.log(data);})
    .catch((err) => {
        console.log(err)
    });
