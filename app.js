let request = require('request');

function getWeather(lat, lon){
    let url = 'https://api.darksky.net/forecast/e515f503ac381162d499ac21b4cb3043/'+lat+','+lon;
    request(url,function (err, response, body) {
        if(err) throw err;
        else{
            let data = JSON.parse(body);
            let celsius = (data.currently.temperature-32)*(5/9);
            console.log('Temperatura: ' + celsius+'°C');
            
        }
    })
}

getWeather(19.24792386537396, -103.6995184766424);