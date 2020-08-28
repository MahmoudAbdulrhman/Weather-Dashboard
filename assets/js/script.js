
var searchBtn = document.querySelector("#search-button")

var cityInputEl = document.querySelector("#search-city");

var userFormEl = document.querySelector("#form-group");

var currentCityEl = document.querySelector("#current-city");

var temperatureEl = document.querySelector("#temperature");

var humidityEl = document.querySelector("#humidity");

var windSpeedEl = document.querySelector("#wind-speed");

var uvIndexEl = document.querySelector("#uv-index")





var getWeatherInfo = function(city){
    // format the weather api url
    var apiKey = "d55a30c7fcf4dbc07c554680997e50c7";
    var apiUrl ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey 
    
    fetch(apiUrl).then(function(response){
        if(response.ok){
        response.json().then(function(data){

            console.log(data);
            //City name
        var currentCityValue = data ['name'];
        currentCityEl.textContent = currentCityValue;
            //temprature
        var temperatureValue = data ['main']['temp']     
        var tempF = Math.round((temperatureValue - 273.15) * 1.80 + 32 );
        temperatureEl.textContent = tempF;
            //Humidity
        var humidityValue = data ['main']['humidity'];
        humidityEl.textContent = humidityValue;
            //Wind Speed
        var windSpeedValue = data ['wind']['speed'];
        var windsmph=(windSpeedValue*2.237).toFixed(1);
        windSpeedEl.textContent = windsmph;
            //UV index
            
         })   
        }else{
            alert("Error"+ response.statusText);
        }
        
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