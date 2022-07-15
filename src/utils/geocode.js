const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d5e95b28591a21c391c815befa1e5a50&query=37.8267,-122.4233'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } 
        else {
            callback(undefined, {
                description:response.body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = geocode