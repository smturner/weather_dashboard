var searchBtn =$(".searchBtn");
var searchCity =$("#search-city");
var searchInput = $(".search-input");
var nameEL =$(".cityName");
var iconEl=$(".icon")
var tempEl =$(".cityTemp");
var windEL= $(".cityWind");
var humidityEl=$(".cityHumidity");
var indexEl=$(".cityIndex");
var searchHistory=$(".searchHistory")
var pastCities=[];


// var history=(JSON.parse(localStorage.getItem("city")))|| [];
// console.log(history)
// searchHistory.text(history.join(" "))  



searchBtn.on("click", function (searchBtn) {
    if (searchCity !== ""){
        var history=JSON.parse(localStorage.getItem("city"))|| [];
        console.log(history)
        var cityName = searchCity.val();
        console.log(cityName)
    }
    pastCities.push(cityName)
    localStorage.setItem("city", JSON.stringify(pastCities))

        searchHistory.text(history)  

    getApi()
})
  
//   event.preventDefult();
        // // // //where my button is going
        // var userSearchCity = searchInput.val();

        // document.location.href = "./new.html?search=" + userSearchCity;

// var urlData = document.location.search;

// var searchCityName = urlData.split("=")[1];
// console.log(searchCityName)


function getApi(){

    var userSearchCity = searchCity.val();
    console.log(userSearchCity)
    var infoUrl= "https://api.openweathermap.org/data/2.5/weather?q=" +userSearchCity+ "&units=imperial&appid=617a9189a649772e2330c08de56b1117"
fetch(infoUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        // var weatherIcon=(data.weather[0].icon)
        // console.log(weatherIcon)
        nameEL.text(data.name + "   "+  moment().format("L")) ;
        // iconEl=`https://openweathermap.org/img/wn/" + weatherIcon+ "&@2x.png`
        tempEl.text("Temperature: " + data.main.temp + "°F");
        windEL.text("Wind: " +data.wind.speed+ " MPH");
        humidityEl.text("Humidity: " +data.main.humidity+ "%")

        // for (var i=1; i < 6; i++){
        //     // var date5Day= $(".card-date")
        //     var tempDaily = $("#card-temp")
        //     tempDaily.text("Temp: " +data.daily[i].temp);

        // }

        var latEl= (data.coord.lat)
        var lonEl= (data.coord.lon)
        var latlonUrl= "https://api.openweathermap.org/data/2.5/onecall?lat="+latEl+"&lon=" +lonEl+ "&units=imperial&appid=617a9189a649772e2330c08de56b1117"
       fetch(latlonUrl)
       .then(function(response){
           return response.json();
       })
       .then(function (data){
           console.log(data)
            // indexEl.text()
            // console.log(indexEl)
            // indexNumber.append(indexEl)
            indexEl.text("Uv Index: "+ data.current.uvi)
            console.log(indexEl)
            indexEl.removeClass("purple red orange yellow green") 
            if (data.current.uvi>=11) {
                indexEl.addClass("purple")
            }
            if (data.current.uvi>=8 & data.current.uvi<=10){
                indexEl.addClass("red")
            }
            if (data.current.uvi>=5 & data.current.uvi<=7){
                indexEl.addClass("orange")
            }
            if (data.current.uvi>=3 & data.current.uvi <=5){
                indexEl.addClass("yellow")
            }
            if (data.current.uvi<=2) {
                indexEl.addClass("green")
        }
        // document.location.href= "./new.html"
        // for(var i=0; i<6; i++){
            console.log(data.daily[0])
            var date5Day=$("#card-date0")
            date5Day.text(data.daily[0].dt)
            var reformatDate= moment(date5Day).add(1,"days").format("M/D/YY")
            console.log(reformatDate)
            date5Day.text(reformatDate)
            console.log(date5Day)
            var temp5Day= $("#card-temp0")
            temp5Day.text("Temp: "+ data.daily[0].temp.day +"°F");
            var wind5Day=$("#card-wind0")
            wind5Day.text("Wind: " + data.daily[0].wind_speed + " MPH");
            var humidity5Day=$("#card-humidity0")
            humidity5Day.text("Humidity: "+ data.daily[0].humidity + " %")

            console.log(data.daily[1])
            var date5Day=$("#card-date1")
            date5Day.text(data.daily[1].dt)
            var reformatDate= moment(date5Day).add(2,"days").format("M/D/YY")
            console.log(reformatDate)
            date5Day.text(reformatDate)
            console.log(date5Day)
            var temp5Day= $("#card-temp1")
            temp5Day.text("Temp: "+ data.daily[1].temp.day +"°F");
            var wind5Day=$("#card-wind1")
            wind5Day.text("Wind: " + data.daily[1].wind_speed + " MPH");
            var humidity5Day=$("#card-humidity1")
            humidity5Day.text("Humidity: "+ data.daily[1].humidity + " %")

    
    
        //     var dateDiv= document.getElementById('')
        })
    })
}

            // .then(function(response){
            //     return response.json();
            // })
            // .then(function (data){
            //     console.log(data.list[""])
            //     // for(i=5, i<data.list.length, i+8)
    
  

 
