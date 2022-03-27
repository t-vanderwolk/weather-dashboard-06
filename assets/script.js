function getApi() {
    
    let requestUrl ="http://api.openweathermap.org/geo/1.0/reverse?lat=&lon=&appid=44e2b3699341d2a3a6d507833c150d02";
    
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (let i = 0; i < data.length; i++) {
          let listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          repoList.appendChild(listItem);
        }
      });
  
 
document.addEventListener('click', getApi);
let city="";

let searchCity = $("#search-city");
let searchButton = $("#search-button");
let clearButton = $("#clear-history");
let currentCity = $("#current-city");
let currentTemperature = $("#temperature");
let currentHumidty= $("#humidity");
let currentWSpeed=$("#wind-speed");
let currentUvindex= $("#uv-index");
let sCity=[];
// searches the city to see if it exists in the entries from the local storage
function find(c){
    for (let i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;

}
//Set up the API key
let APIKey="44e2b3699341d2a3a6d507833c150d02";
// Display the curent and future weather to the user after grabing the city form the input text box.
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
}
