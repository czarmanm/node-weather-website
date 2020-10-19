const request = require('postman-request');

const geocode = (address, callback) => {
    const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY3phcm1hbm0iLCJhIjoiY2tlcnRsZmtyMGtoeDJ3c2E1OXltMG9xOSJ9.XuHG_QJyan4RbodqGnEAUQ&limit=1';
    const uriObjectLocation = {url: locationUrl, json: true};

    request(uriObjectLocation, (error, { body }) => {
        if (error) {
            callback('Unable to connecto to location services!', undefined);
        } else if (body.features.length == 0) {
            callback('Unable to find locatio. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;