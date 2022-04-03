//add date to name of city
//add weather icon
//save to local storage
    //display on screen from local storage
//add 5 day weather forcast
    //each in their own boxes


//variable for search button
var searchBtn = $("#searchBtn");
//variable for the input data
var searchCity = $("#search-city");
var APIKey = "617a9189a649772e2330c08de56b1117";
var city= $(".city");
//function for button to work
searchBtn.on("click", function (event) {
//   event.preventDefult();
    var userSearchCity = searchCity.val();
    // //where my button is going
    document.location.href = "./index.html?search=" + userSearchCity;
    // saveSearch(userSearchCity)
    localStorage.setItem("city", JSON.stringify(userSearchCity))
});

//working local storage
// var saveSearch= function(saveSearch){
//     localStorage.setItem("city", JSON.stringify(city));
//     console.log(localStorage.getItem("city"))
// }




//how to get the results
//variable to get the data from the url to the webpage
var urlData = document.location.search;
// console.log(urlData)

//Variable to give you just the name of the city you are searching
var searchCityName = urlData.split("=")[1];

https://api.openweathermap.org/geo/1.0/direct
// console.log(searchCityName)
var mainWeather = $("#main");

// // var searchCity= urlData.split("=")[1];
// // console.log(searchCity)
// var locationApiUrl ="http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=617a9189a649772e2330c08de56b1117";
var lat;
var lon;
var city;


fetch("http://api.openweathermap.org/geo/1.0/direct?q=" +searchCityName+ "&limit=1&appid=617a9189a649772e2330c08de56b1117")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        // console.log(data[0].lat);
        city=data[0].name;
           
        lat=data[0].lat;
        console.log(lat)
        lon=data[0].lon;
        var articleEl= $("<article>");
        var cityName= $("<h2>");
        cityName.text(data[0].name);
        articleEl.append(cityName);
        mainWeather.append(articleEl);

        return fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon=" +lon+ "&units=imperial&appid=617a9189a649772e2330c08de56b1117")
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var articleEl= $("<article class='mainWeather'>");
        var titleEl = $("<h2>");
        // var icon= $(".icon").html("<img src=' + icon + '>");
        var tempEl = $("<h5>");
        var windEl= $("<h5>");
        var humidityEl=$("<h5>");
        var uvi=$("<h5>");
        var forcast =$("<div>");
        var div1EL= $("<div class='first'>")
        var eachDay=$("<div>")
        var div2El= $("<div class='second'>")
                //     var iconcode = data.current.weather[0];
    //     console.log(iconcode)
    //     $('#wicon').attr('src', iconcode);

    //    articleEl.append(iconcode)



        // icon.text(data.current.weather[0]);
        //     articleEl.append(icon)
        tempEl.text("Temp: " + data.current.temp + "°F");
            articleEl.append(tempEl);
        windEl.text("Wind: " + data.current.wind_speed + " MPH");
            articleEl.append(windEl);
        // windEl= $("Wind: " + data.current.wind_speed ) ;
        //     articleEl.append(windEl);
        humidityEl.text("Humidity: " + data.current.humidity + "%");
            articleEl.append(humidityEl);
            uvi.text("UV Index: " + data.current.uvi);
                articleEl.append(uvi);
            forcast.text("5-Day Forcast")
            div1EL.append(forcast)
            eachDay.text(data.daily[1].temp.day);
            div2El.append(eachDay)
            
            
        mainWeather.append(articleEl);
        mainWeather.append(div1EL);
        mainWeather.append(div2El)

        

    });

    })
    
        // console.log(data[0].lat);
        // var lat=$(data[0].lat)
        // console.log(lat)
        // var lon=$(data[0].lon)
        // console.log(lon)
    
       

    // })


    // var weaterApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=617a9189a649772e2330c08de56b1117";
       

    // fetch(weaterApiUrl )
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    //     var articleEl= $("<article class='p-9'>");
    //     var titleEl = $("<h2>");
    //     // var icon= $(".icon").html("<img src=' + icon + '>");
    //     var tempEl = $("<h5>");
    //     var windEl= $("<h5>");
    //     var humidityEl=$("<h5>");

    // //     var iconcode = data.current.weather[0];
    // //     console.log(iconcode)
    // //     $('#wicon').attr('src', iconcode);

    // //    articleEl.append(iconcode)



    //     // icon.text(data.current.weather[0]);
    //     //     articleEl.append(icon)
    //     tempEl.text("Temp: " + data.current.temp + "°F");
    //         articleEl.append(tempEl);
    //     windEl.text("Wind: " + data.current.wind_speed + " MPH");
    //         articleEl.append(windEl);
    //     // windEl= $("Wind: " + data.current.wind_speed ) ;
    //     //     articleEl.append(windEl);
    //     humidityEl.text("Humidity: " + data.current.humidity + "%");
    //         articleEl.append(humidityEl);
    //     mainWeather.append(articleEl);
    // });




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

