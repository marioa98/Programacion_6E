let request = require('request');

let weather = new Promise(function(resolve,reject){
    resolve();
    reject(reason);

});

weather.then(
    function getWeather(lat, lon){
    let url = 'https://api.darksky.net/forecast/e515f503ac381162d499ac21b4cb3043/19.24792386537396, -103.6995184766424';
    request(url,function (err, response, body) {
        if(err) throw err;
        else{
            let data = JSON.parse(body);
            let celsius = (data.currently.temperature-32)*(5/9);
            console.log('Temperatura: ' + celsius+'°C');
            
        }
    })
}
).catch(
    function(reason) {
        console.log('Manejar promesa rechazada ('+reason+') aquí.');
    
});