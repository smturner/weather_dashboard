var searchBtn =$(".searchBtn");
var searchCity =$("#search-city");
var searchInput = $(".search-input");
var nameEL =$(".cityName");
var iconEl=$("#weather-icon")
console.log(iconEl)
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
    // console.log(userSearchCity)
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
        var dataIcon= (data.weather[0].icon)
        console.log (dataIcon)
        var iconUrl="http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"

        iconEl.attr("src", iconUrl);
        console.log(iconEl)
        iconEl.append(iconUrl)
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
        //Day 1 5 day forcast
            console.log(data.daily[0])
            var date5Day=$("#card-date0")
            date5Day.text(data.daily[0].dt)
            var reformatDate= moment(date5Day).add(1,"days").format("M/D/YY")
            console.log(reformatDate)
            date5Day.text(reformatDate)
            console.log(date5Day)
            var dataIcon= (data.weather[0].icon)
            console.log (dataIcon)
            var iconUrl="http://openweathermap.org/img/wn/" + dataIcon + "@2x.png"
    
            iconEl.attr("src", iconUrl);
            console.log(iconEl)
            iconEl.append(iconUrl)
            var temp5Day= $("#card-temp0")
            temp5Day.text("Temp: "+ data.daily[0].temp.day +"°F");
            var wind5Day=$("#card-wind0")
            wind5Day.text("Wind: " + data.daily[0].wind_speed + " MPH");
            var humidity5Day=$("#card-humidity0")
            humidity5Day.text("Humidity: "+ data.daily[0].humidity + " %")
        //Day 2-5 day forcast
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
        //Day 3-5 day forcast
            console.log(data.daily[2])
            var date5Day=$("#card-date2")
            date5Day.text(data.daily[2].dt)
            var reformatDate= moment(date5Day).add(3,"days").format("M/D/YY")
            console.log(reformatDate)
            date5Day.text(reformatDate)
            console.log(date5Day)
            var temp5Day= $("#card-temp2")
            temp5Day.text("Temp: "+ data.daily[2].temp.day +"°F");
            var wind5Day=$("#card-wind2")
            wind5Day.text("Wind: " + data.daily[2].wind_speed + " MPH");
            var humidity5Day=$("#card-humidity2")
            humidity5Day.text("Humidity: "+ data.daily[2].humidity + " %")
        //Day 4-5 day forcast
            console.log(data.daily[3])
            var date5Day=$("#card-date3")
            date5Day.text(data.daily[3].dt)
            var reformatDate= moment(date5Day).add(4,"days").format("M/D/YY")
            console.log(reformatDate)
            date5Day.text(reformatDate)
            console.log(date5Day)
            var temp5Day= $("#card-temp3")
            temp5Day.text("Temp: "+ data.daily[3].temp.day +"°F");
            var wind5Day=$("#card-wind3")
            wind5Day.text("Wind: " + data.daily[3].wind_speed + " MPH");
            var humidity5Day=$("#card-humidity3")
            humidity5Day.text("Humidity: "+ data.daily[3].humidity + " %")
        //Day 5-5 day forcast
        console.log(data.daily[4])
            var date5Day=$("#card-date4")
            date5Day.text(data.daily[4].dt)
            var reformatDate= moment(date5Day).add(5,"days").format("M/D/YY")
            console.log(reformatDate)
            date5Day.text(reformatDate)
            console.log(date5Day)
            var temp5Day= $("#card-temp4")
            temp5Day.text("Temp: "+ data.daily[4].temp.day +"°F");
            var wind5Day=$("#card-wind4")
            wind5Day.text("Wind: " + data.daily[4].wind_speed + " MPH");
            var humidity5Day=$("#card-humidity4")
            humidity5Day.text("Humidity: "+ data.daily[4].humidity + " %")



    
    
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
    
  

 
