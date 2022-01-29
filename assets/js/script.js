// globals


// API fetch and function
const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1cea6050e017bee6a2d6d8c3cc614e1e";

var getWeatherApi = function () {
    fetch(weatherApi)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })
};

getWeatherApi();

// save to localStorage