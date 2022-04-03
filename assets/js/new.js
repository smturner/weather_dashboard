var APIKey = $("617a9189a649772e2330c08de56b1117");
var searchBtn = $("#searchBtn");
var searchInput= $("#searchInput");
var searchHistoryEl=$(".historyItems");

searchBtn.on("click", function () {
    //   event.preventDefult();
        var userSearchCity = searchInput.val();
        // //where my button is going
        document.location.href = "./new.html?search=" + userSearchCity;
        // saveSearch(userSearchCity)
    });

    $(document).on("click",".historyEntry", function(){
        var thisElement= $(this);
        getWeather(thisElement.text());
    })

function searchHistory(){
    searchHistoryEl.empty();
    var searchHistoryArr =JSON.parse(localStorage.getItem("searchHistory"));
    for( var i=0; i<searchHistoryArr.length; i++){
        var newCityName =$("<li>").attr("class", ".historyEntry", function(){
            var thisElement= $(this);


function getWeather(desiredCity) {
    
}




            localStorage.setItem("city", JSON.stringify(userSearchCity));
        // pastSearch();
        searchHistory()