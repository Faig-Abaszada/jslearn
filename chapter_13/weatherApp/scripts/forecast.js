
const apiKey = 'C5A1SfhvUXNbyF5VtwWiJWiPDxdYx73Y';


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
        console.log(data);
    }).catch((err) => {
    console.log(err)
});
