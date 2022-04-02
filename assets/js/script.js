var searchBtn = $("#searchBtn");
var searchCity= $("#search-city");
var APIKey = "617a9189a649772e2330c08de56b1117";
var city;

searchBtn.on("click", function(event){
    // event.preventDefult();
    // alert("hello");
    // console.log(searchCity.val());
    var userSearchCity= searchCity.val();
    document.location.href= "./weather.html?search=" + userSearchCity;
    console.log(SearchCity)
})

// var urlData=


var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=denver&appid=617a9189a649772e2330c08de56b1117";

fetch(queryURL)
.then(function(response){
    return response.json();

})
.then(function(data){
    console.log(data);
})
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

    