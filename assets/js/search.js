var searchBtn =$(".searchBtn");
var searchCity =$("#search-city");
// var searchInput = $(".search-input");
var nameEL =$(".cityName");
var tempEl =$(".cityTemp");
var windEL= $(".cityWind");
var humidityEl=$(".cityHumidity");
var indexEl=$(".cityIndex");

searchBtn.on("click", function () {
    //   event.preventDefult();
        var userSearchCity = searchCity.val();
        // //where my button is going
        document.location.href = "./new.html?search=" + userSearchCity;
});
var urlData = document.location.search;
var searchCityName = urlData.split("=")[1];
console.log(searchCityName)


// function getApi(){
fetch("https://api.openweathermap.org/data/2.5/weather?q=" +searchCityName+ "&units=imperial&appid=617a9189a649772e2330c08de56b1117")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        nameEL.text(data.name + "   "+  moment().format("L")) ;
        tempEl.text("Temperature: " + data.main.temp + "°F");
        windEL.text("Wind: " +data.wind.speed+ " MPH");
        humidityEl.text("Humidity: " +data.main.humidity+ "%")
    })


/