var buttonContainer = document.querySelector(".list-group");

var laodButtonEl = document.querySelector("#loadButton")

var searchBtn = document.querySelector("#search-button");

var cityInputEl = document.querySelector("#search-city");

var userFormEl = document.querySelector("#form-group");

var currentCityEl = document.querySelector("#current-city");

var temperatureEl = document.querySelector("#temperature");

var humidityEl = document.querySelector("#humidity");

var windSpeedEl = document.querySelector("#wind-speed");

var uvIndexEl = document.querySelector("#uv-index");

var currentweatherEl = document.querySelector("#current-weather");

var iconEl = document.querySelector("#icon");

var oldCitySearch = [];



// Forecast Var
var nextDayDate = document.querySelector("#fDate0")

var nextDayTemp = document.querySelector("#fTemp0")

var nextDayHumidity = document.querySelector("#fHumidity0")

var secDayDate = document.querySelector("#fDate1")

var secDayTemp = document.querySelector("#fTemp1")

var secDayHumidity = document.querySelector("#fHumidity1")

var thrdDayDate = document.querySelector("#fDate2")

var thrdDayTemp = document.querySelector("#fTemp2")

var thrdDayHumidity = document.querySelector("#fHumidity2")

var forthDayDate = document.querySelector("#fDate3")

var forthDayTemp = document.querySelector("#fTemp3")

var forthDayHumidity = document.querySelector("#fHumidity3")

var fifthDayDate = document.querySelector("#fDate4")

var fifthDayTemp = document.querySelector("#fTemp4")

var fifthDayHumidity = document.querySelector("#fHumidity4")

var apiKey = "d55a30c7fcf4dbc07c554680997e50c7";



var getWeatherInfo = function (city) {


    // format the weather api url

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey


    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                
                //condition Img
                var weathericon = data.weather[0].icon;
                var iconUrl = "http://openweathermap.org/img/wn/" + weathericon + ".png"
                iconEl.setAttribute("src" , (iconUrl));


                //City name
                var currentCityValue = data['name'];
                currentCityEl.textContent = currentCityValue;

                //temprature

                var temperatureValue = data['main']['temp']
                var tempF = Math.round((temperatureValue - 273.15) * 1.80 + 32);
                temperatureEl.innerHTML = tempF + " &deg;F" ;

                //Humidity

                var humidityValue = data['main']['humidity'];
                humidityEl.textContent = humidityValue + "%";

                //Wind Speed

                var windSpeedValue = data['wind']['speed'];
                var windsmph = (windSpeedValue * 2.237).toFixed(1);
                windSpeedEl.textContent = windsmph + " mph ";

                // UV 

                var coordinates = "&lon=" + data.coord.lon + "&lat=" + data.coord.lat
                var uvUrl = "https://api.openweathermap.org/data/2.5/uvi?";
                fetch(uvUrl + coordinates + "&appid=" + apiKey).then(function(uvResponse){
                    uvResponse.json().then(function(uvData){
                        var uvValue = uvData["value"]
                        uvIndexEl.innerHTML = uvValue;

                    })
                })

                //forecast

                var fiveApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
                fetch(fiveApi).then(function (response) {
                    response.json().then(function (data) {
                
                        //next day information
                        var nextDate = (data.list[0].dt_txt)
                        var date = nextDate.substr(0, 10);
                        nextDayDate.textContent = date

                        var img0El = document.querySelector("#wImg0");
                        img0El.setAttribute("src", (iconUrl));


                        var nextDay = (data.list[0].main.temp);
                        var temprF = Math.round((nextDay - 273.15) * 1.80 + 32 );
                        nextDayTemp.innerHTML = temprF + " &deg;F"  ;

                        var nextHumidity = (data.list[0].main.humidity);
                        nextDayHumidity.textContent = (nextHumidity) + "%";

                        //secned day information
                        var secDate = (data.list[8].dt_txt)
                        var date1 = secDate.substr(0, 10);
                        secDayDate.textContent = date1

                        var img1El = document.querySelector("#wImg1");
                        img1El.setAttribute("src", (iconUrl));


                        var secDay = (data.list[8].main.temp);
                        var temprF2 = Math.round((secDay - 273.15) * 1.80 + 32);
                        secDayTemp.innerHTML = temprF2 +" &deg;F" ;

                        var secHumidity = (data.list[8].main.humidity);
                        secDayHumidity.textContent = (secHumidity) + "%";

                        //thred day information
                        var thrdDate = (data.list[14].dt_txt)
                        var date2 = thrdDate.substr(0, 10);
                        thrdDayDate.textContent = date2

                        var img2El = document.querySelector("#wImg2");
                        img2El.setAttribute("src", (iconUrl));

                        var thrdDay = (data.list[14].main.temp);
                        var temprF3 = Math.round((thrdDay - 273.15) * 1.80 + 32);
                        thrdDayTemp.innerHTML = temprF3 +" &deg;F" ;

                        var thrdHumidity = (data.list[14].main.humidity);
                        thrdDayHumidity.textContent = (thrdHumidity) + "%";

                        //forth day information
                        var forthDate = (data.list[23].dt_txt)
                        var date3 = forthDate.substr(0, 10);
                        forthDayDate.textContent = date3

                        var img3El = document.querySelector("#wImg3");
                        img3El.setAttribute("src", (iconUrl));


                        var forthDay = (data.list[23].main.temp);
                        var temprF4 = Math.round((forthDay - 273.15) * 1.80 + 32);
                        forthDayTemp.innerHTML = temprF4 +" &deg;F" ;

                        var forthHumidity = (data.list[23].main.humidity);
                        forthDayHumidity.textContent = (forthHumidity) + "%";

                        //fifth day information
                        var fifthDate = (data.list[30].dt_txt)
                        var date4 = fifthDate.substr(0, 10);
                        fifthDayDate.textContent = date4

                        var img4El = document.querySelector("#wImg4");
                        img4El.setAttribute("src", (iconUrl));


                        var fifthDay = (data.list[30].main.temp);
                        var temprF5 = Math.round((fifthDay - 273.15) * 1.80 + 32);
                        fifthDayTemp.innerHTML = temprF5 + " &deg;F";

                        var fifthHumidity = (data.list[30].main.humidity);
                        fifthDayHumidity.textContent = (fifthHumidity) + "%";

                    })
                })



            })
        } else {
            alert("Error" + response.statusText);
        }

    })

  

}



// when search button is clicked 
var formSubmitHandler = function(event) {
    event.preventDefault();
    // city to appear after search
    var askCity = cityInputEl.value.trim();
    if (askCity) {
        cityList = document.createElement("li");
        cityList.className = "nav-item";
        cityList.innerHTML="<a href='#' class='border nav-link'><span data-feather='file'></span>"+askCity+"</a>";
        buttonContainer.appendChild(cityList);
        oldCitySearch.push(askCity);
        localStorage.setItem("oldCities", JSON.stringify(oldCitySearch));
        getWeatherInfo(askCity);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city.");
    }
};

var sideSearches = function (event) {
    var cityName = event.target.textContent;
    getWeatherInfo(cityName);
}

// local storage and saving
var localSafe = function () {
    // local storage
   var oldCities = JSON.parse(localStorage.getItem('oldCities'));
   if (oldCities === null) {
       return;
   }
   else {
       for (var i = 0; i < oldCities.length; i++) {
           cityList = document.createElement("li");
           cityList.className = "nav-item";
           cityList.innerHTML="<a href='#' class='border nav-link'><span data-feather='file'></span>"+oldCities[i]+"</a>";
           buttonContainer.appendChild(cityList);
       }
   }
}
localSafe();





userFormEl.addEventListener("submit", formSubmitHandler);
buttonContainer.addEventListener("click", sideSearches);

