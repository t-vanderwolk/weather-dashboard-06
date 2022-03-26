function getApi() {
    
    let requestUrl ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    let APIKey=" 44e2b3699341d2a3a6d507833c150d02";
  
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
  }
  
  fetchButton.addEventListener('click', getApi());
let city="";
// letiable declarations
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

//function getApi(){

// let requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.49&lon=111.926109&exclude=hourly,daily&appid=44e2b3699341d2a3a6d507833c150d02";
// fetch(requestURL)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//   console.log(data)
// })
// }