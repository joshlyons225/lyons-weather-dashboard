// globals
var searchButtonEl = document.querySelector("#searchBtn");
var favHistoryArray = document.querySelector("#city-history");
var resetButtonEl = document.querySelector("#resetBtn");

// API fetch and function
var getWeatherApi = function () {
    var cityName = document.getElementById('city-search').value;
    console.log(cityName);
    const weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=1cea6050e017bee6a2d6d8c3cc614e1e&units=imperial";
    fetch(weatherApi)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })
    // save city name to localStorage
    var savedCities = JSON.parse(localStorage.getItem("city"));
    if (savedCities === null) {
        savedCities = [];
    }
    var favCities = cityName;
    savedCities.push(favCities);
    localStorage.setItem("city", JSON.stringify(savedCities));
    console.log(localStorage.getItem("city"));
    // display searched cities to search history section
    favHistoryArray.innerHTML = savedCities.join("<br/>");
};

var resetFavorites = function () {
    favHistoryArray.textContent = "";
    localStorage.clear();
    console.log("cleared city search history");
}

// eventListener for Search button
searchButtonEl.addEventListener("click", getWeatherApi);

// eventListener for Reset button
resetButtonEl.addEventListener("click", resetFavorites);



