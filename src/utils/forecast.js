const request = require('postman-request');
const forecast = (latitude, longitude, callback) => {
    const weatherUrl = 'http://api.weatherstack.com/current?access_key=3792be275cac070df66088e50ff2dc93&query=' + latitude + ',' +longitude + '&units=m';
    const uriObjectWeather = {url: weatherUrl, json: true};

    request(uriObjectWeather, (error, { body }) => {
        if(error) {
            callback('Unable to connecto to weather services!', undefined);
        } else if (body.error) {
            this.call('Unable to find location', undefined);
        } else {
            callback(undefined, `The current weather in ${body.location.name} is ${body.current.weather_descriptions[0]}. It feels like ${body.current.feelslike}ºC. The cloud cover is ${body.current.cloudcover}%.`);
        }
    });
};

module.exports = forecast;