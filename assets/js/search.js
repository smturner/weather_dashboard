// variables
var searchBtn = $(".searchBtn");
var searchCity = $("#search-city");
var searchInput = $(".search-input");
var nameEL = $(".cityName");
var iconEl = $("#weather-icon")
var tempEl = $(".cityTemp");
var windEL = $(".cityWind");
var humidityEl = $(".cityHumidity");
var indexEl = $(".cityIndex");
var searchHistory = $(".searchHistory")
var pastCities = [];

//search button function to render searches
searchBtn.on("click", function (searchBtn) {
    if (searchCity !== "") {
        var history = JSON.parse(localStorage.getItem("city")) || [];
        // console.log(history)
        var cityName = searchCity.val();
        // console.log(cityName)
    }
    pastCities.push(cityName)
    localStorage.setItem("city", JSON.stringify(pastCities))

    searchHistory.text(history)

    getApi()
})

// function to get api data and display it on the page
function getApi() {

    var userSearchCity = searchCity.val();
    var infoUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearchCity + "&units=imperial&appid=617a9189a649772e2330c08de56b1117"
    fetch(infoUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            // data for the main weather box
            nameEL.text(data.name + "   " + moment().format("L"));
            var dataIcon = (data.weather[0].icon)
            // console.log(dataIcon)
            var iconUrl = "http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
            iconEl.attr("src", iconUrl);
            // console.log(iconEl)
            iconEl.append(iconUrl)
            tempEl.text("Temperature: " + data.main.temp + "°F");
            windEL.text("Wind: " + data.wind.speed + " MPH");
            humidityEl.text("Humidity: " + data.main.humidity + "%")
            //variables for lat and lon
            var latEl = (data.coord.lat)
            var lonEl = (data.coord.lon)
            var latlonUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latEl + "&lon=" + lonEl + "&units=imperial&appid=617a9189a649772e2330c08de56b1117"
            fetch(latlonUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                    // data for 5 day forcast
                    indexEl.text("Uv Index: " + data.current.uvi)
                    indexEl.removeClass("purple red orange yellow green")
                    if (data.current.uvi >= 11) {
                        indexEl.addClass("purple")
                    }
                    if (data.current.uvi >= 8 & data.current.uvi <= 10.99) {
                        indexEl.addClass("red")
                    }
                    if (data.current.uvi >= 6 & data.current.uvi <= 7.99) {
                        indexEl.addClass("orange")
                    }
                    if (data.current.uvi >= 3 & data.current.uvi <= 5.99) {
                        indexEl.addClass("yellow")
                    }
                    if (data.current.uvi <= 2.99) {
                        indexEl.addClass("green")
                    }
                    //Day 1 5 day forcast
                    // console.log(data.daily[0])
                    var date5Day = $("#card-date0")
                    date5Day.text(data.daily[0].dt)
                    var reformatDate = moment(date5Day).add(1, "days").format("M/D/YY")
                    date5Day.text(reformatDate)
                    var weatherIcon0 = $("#weather-icon0")
                    var dataIcon = (data.daily[0].weather[0].icon)
                    var iconUrl = "http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
                    // console.log(dataIcon)

                    weatherIcon0.attr("src", iconUrl);
                    // console.log(weatherIcon0)
                    weatherIcon0.append(iconUrl)
                    var temp5Day = $("#card-temp0")
                    temp5Day.text("Temp: " + data.daily[0].temp.day + "°F");
                    var wind5Day = $("#card-wind0")
                    wind5Day.text("Wind: " + data.daily[0].wind_speed + " MPH");
                    var humidity5Day = $("#card-humidity0")
                    humidity5Day.text("Humidity: " + data.daily[0].humidity + " %")
                    //Day 2-5 day forcast
                    // console.log(data.daily[1])
                    var date5Day = $("#card-date1")
                    date5Day.text(data.daily[1].dt)
                    var reformatDate = moment(date5Day).add(2, "days").format("M/D/YY")
                    // console.log(reformatDate)
                    date5Day.text(reformatDate)
                    console.log(date5Day)
                    var weatherIcon1 = $("#weather-icon1")
                    var dataIcon = (data.daily[1].weather[0].icon)
                    // console.log(dataIcon)
                    var iconUrl = "http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
                    // console.log(dataIcon)

                    weatherIcon1.attr("src", iconUrl);
                    // console.log(weatherIcon1)
                    weatherIcon1.append(iconUrl)
                    var temp5Day = $("#card-temp1")
                    temp5Day.text("Temp: " + data.daily[1].temp.day + "°F");
                    var wind5Day = $("#card-wind1")
                    wind5Day.text("Wind: " + data.daily[1].wind_speed + " MPH");
                    var humidity5Day = $("#card-humidity1")
                    humidity5Day.text("Humidity: " + data.daily[1].humidity + " %")
                    //Day 3-5 day forcast
                    // console.log(data.daily[2])
                    var date5Day = $("#card-date2")
                    date5Day.text(data.daily[2].dt)
                    var reformatDate = moment(date5Day).add(3, "days").format("M/D/YY")
                    // console.log(reformatDate)
                    date5Day.text(reformatDate)
                    // console.log(date5Day)
                    var weatherIcon2 = $("#weather-icon2")
                    var dataIcon = (data.daily[2].weather[0].icon)
                    // console.log(dataIcon)
                    var iconUrl = "http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
                    // console.log(dataIcon)

                    weatherIcon2.attr("src", iconUrl);
                    // console.log(weatherIcon2)
                    weatherIcon2.append(iconUrl)
                    var temp5Day = $("#card-temp2")
                    temp5Day.text("Temp: " + data.daily[2].temp.day + "°F");
                    var wind5Day = $("#card-wind2")
                    wind5Day.text("Wind: " + data.daily[2].wind_speed + " MPH");
                    var humidity5Day = $("#card-humidity2")
                    humidity5Day.text("Humidity: " + data.daily[2].humidity + " %")
                    //Day 4-5 day forcast
                    // console.log(data.daily[3])
                    var date5Day = $("#card-date3")
                    date5Day.text(data.daily[3].dt)
                    var reformatDate = moment(date5Day).add(4, "days").format("M/D/YY")
                    // console.log(reformatDate)
                    date5Day.text(reformatDate)
                    // console.log(date5Day)
                    var weatherIcon3 = $("#weather-icon3")
                    var dataIcon = (data.daily[3].weather[0].icon)
                    // console.log(dataIcon)
                    var iconUrl = "http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
                    // console.log(dataIcon)

                    weatherIcon3.attr("src", iconUrl);
                    // console.log(weatherIcon3)
                    weatherIcon3.append(iconUrl)
                    var temp5Day = $("#card-temp3")
                    temp5Day.text("Temp: " + data.daily[3].temp.day + "°F");
                    var wind5Day = $("#card-wind3")
                    wind5Day.text("Wind: " + data.daily[3].wind_speed + " MPH");
                    var humidity5Day = $("#card-humidity3")
                    humidity5Day.text("Humidity: " + data.daily[3].humidity + " %")
                    //Day 5-5 day forcast
                    // console.log(data.daily[4])
                    var date5Day = $("#card-date4")
                    date5Day.text(data.daily[4].dt)
                    var reformatDate = moment(date5Day).add(5, "days").format("M/D/YY")
                    date5Day.text(reformatDate)
                    var weatherIcon4 = $("#weather-icon4")
                    var dataIcon = (data.daily[4].weather[0].icon)
                    var iconUrl = "http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
                    weatherIcon4.attr("src", iconUrl);
                    // console.log(weatherIcon4)
                    weatherIcon4.append(iconUrl)
                    var temp5Day = $("#card-temp4")
                    temp5Day.text("Temp: " + data.daily[4].temp.day + "°F");
                    var wind5Day = $("#card-wind4")
                    wind5Day.text("Wind: " + data.daily[4].wind_speed + " MPH");
                    var humidity5Day = $("#card-humidity4")
                    humidity5Day.text("Humidity: " + data.daily[4].humidity + " %")





                    
                })
        })
}

         



