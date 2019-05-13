let request = require('request');

function getAddress(address) {
    let ad = address.replace(' ', '%20');
    let geoAPI = `https://us1.locationiq.com/v1/search.php?key=4d8ba861ad623c&q=${ad}&format=json`;

    request(geoAPI, /*async*/ function (err, response, body) {
        if (err) throw err;
        else {
            let data = JSON.parse(body);
            let lat = data[0]['lat'];
            let lon = data[0]['lon'];

            console.log('Lugar: ' + address + '\nCoordenadas: ' + lat + ', ' + lon);

            getWeather(lat, lon)

        }
    })
}

function getWeather(lat, lon) {
    let url = `https://api.darksky.net/forecast/e515f503ac381162d499ac21b4cb3043/${lat},${lon}`;
    request(url, function (err, response, body) {
        if (err) throw err;
        else {

            let data = JSON.parse(body);
            let celsius = (data.currently.temperature - 32) * (5 / 9);
            console.log('Temperatura: ' + celsius + '°C');
            UV_Radiation(lat, lon);
        }
    })
}

function UV_Radiation(lat, lon) {
    let options = {
        method: 'GET',
        url: 'https://api.openuv.io/api/v1/uv',
        qs: {
            lat: `${lat}`,
            lng: `${lon}`
        },
        headers: {
            'content-type': 'application/json',
            'x-access-token': '9bfe6ae6031897d56ae49d64933890e1'
        }
    };

    request(options, function (err, response, body) {
        if (err) throw err;
        else {
            let data = JSON.parse(body);
            console.log('Radiación UV: ' + data.result.uv);
            console.log('Radiación UV Máxima: ' + data.result.uv_max);
        }
    })
}

getAddress('California');