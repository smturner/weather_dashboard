var searchBtn = $("#searchBtn");
var searchCity = $("#search-city");
var APIKey = "617a9189a649772e2330c08de56b1117";
// var city;

searchBtn.on("click", function (event) {
    // event.preventDefult();
    // alert("hello");
    // console.log(searchCity.val());
    var userSearchCity = searchCity.val();
    document.location.href = "./index.html?search=" + userSearchCity;
    // console.log(searchCity)
});

// var urlData = document.location;
// console.log(urlData);


var urlData = document.location.search;
// console.log(urlData)

var searchCityName = urlData.split("=")[1];
var mainWeather = $("#main");

// // var searchCity= urlData.split("=")[1];
// // console.log(searchCity)

var locationApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=617a9189a649772e2330c08de56b1117";

fetch(locationApiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data);
        
    })

    var weaterApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&appid=617a9189a649772e2330c08de56b1117";



fetch(weaterApiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var articleEl= $("<article>");
        var titleEl = $("<h2>");
        var icon= $("<img>")
        var tempEl = $("<h5>");
        var windEl= $("<h5>");
        var humidityEl=$("<h5>");

    //     var iconcode = data.current.weather[0];
    //     console.log(iconcode)
    //     $('#wicon').attr('src', iconcode);

    //    articleEl.append(iconcode)

    $(".icon").html("<img src=' + icon + '>");

        // icon.text(data.current.weather[0].icon);
        //     articleEl.append(icon)
        tempEl.text("Temp: " + data.current.temp + "°F");
            articleEl.append(tempEl);
        windEl.text("Wind: " + data.current.wind_speed + " MPH");
            articleEl.append(windEl);
        // windEl= $("Wind: " + data.current.wind_speed ) ;
        //     articleEl.append(windEl);
        humidityEl.text("Humidity: " + data.current.humidity + "%");
            articleEl.append(humidityEl);
        mainWeather.append(articleEl);
    });

// fetch(locationApiUrl)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data.lat);
//         console.log(data);
//     })

// for(var i=0; i< data.length; i++){
// var mainSectionEl = $("<div class='mainWeather'>");
// var cityName = $("<h2>");
// // var date=$("")
// cityName.text(data.resutls.name);
// mainSectionEl.append(cityName);

// mainWeather.append(mainSectionEl);


// fetch(locationApiUrl)
// .then(function(response){
//     return response.json();

// })
// .then(function(data){
//     console.log(data);
// })





// console.log(queryURL)


// var apiUrl= "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&wind_speed=2.06&appid=617a9189a649772e2330c08de56b1117"
// console.log(apiUrl)

// fetch(apiUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     // .then(function (data) {
//     //     console.log(data.results[2]);
//     // })



//     // console.log(searchTerm.val());
//     var userSearchTerm = searchTerm.val();
//     var userFormat = format.val();
//     document.location.href = "./results.html?search=" + userSearchTerm + "&format=" + userFormat;
// });





// var apiUrl= "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
// console.log(apiUrl)

// fetch(apiUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.results[0]);
//     })

