var searchBtn =$(".searchBtn");
var searchCity =$("#search-city");
var searchInput = $(".search-input");
var nameEL =$(".cityName");
var tempEl =$(".cityTemp");
var windEL= $(".cityWind");
var humidityEl=$(".cityHumidity");
var indexEl=$(".cityIndex");
// var indexNumber=$(".indexNumber");


searchBtn.on("click", function () {
    getApi()
    //   event.preventDefult();
        // // // //where my button is going
        // document.location.href = "./new.html?search=" + userSearchCity;
});
// var urlData = document.location.search;

// var searchCityName = urlData.split("=")[1];
// console.log(searchCityName)


function getApi(){
    var userSearchCity = searchCity.val();
    var infoUrl= "https://api.openweathermap.org/data/2.5/weather?q=" +userSearchCity+ "&units=imperial&appid=617a9189a649772e2330c08de56b1117"
fetch(infoUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        nameEL.text(data.name + "   "+  moment().format("L")) ;
        tempEl.text("Temperature: " + data.main.temp + "°F");
        windEL.text("Wind: " +data.wind.speed+ " MPH");
        humidityEl.text("Humidity: " +data.main.humidity+ "%")

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
            if (data.current.uvi>=6 & data.current.uvi<=7){
                indexEl.addClass("orange")
            }
            if (data.current.uvi>=3 & data.current.uvi <=5){
                indexEl.addClass("yellow")
            }
            if (data.current.uvi<=2)
                indexEl.addClass("green")

            var forcastUrl= "https://api.openweathermap.org/data/2.5/forecast?lat="+latEl+"&lon="+lonEl+"&units=imperial&appid=617a9189a649772e2330c08de56b1117"
            fetch (forcastUrl)
            .then(function(response){
                return response.json();
            })
            .then(function (data){
                console.log(data.list[""])
                for(i=5, i<data.list.length, i+8)
                
            })

       })

    })
}

