
var searchBtn = document.querySelector("#search-button")

var cityInputEl = document.querySelector("#search-city");

var userFormEl = document.querySelector("#form-group");

var getWeatherInfo = function(city){
    // format the weather api url
    var apiUrl ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d55a30c7fcf4dbc07c554680997e50c7"
    fetch(apiUrl).then(function(response){
    response.json().then(function(data){
        console.log(data);
    })
     
    })

}



var formSubmitHandler = function(event) {
    event.preventDefault();
    
    var cityName =cityInputEl.value.trim();
    
console.log(cityName);
    if (cityName){
        getWeatherInfo(cityName);
        cityInputEl.value = ""
        console.log(cityName);
    } else  {
        alert("Please enter a city name");
    }
    
};

userFormEl.addEventListener( "submit" , formSubmitHandler);

searchBtn.addEventListener("click", getWeatherInfo);