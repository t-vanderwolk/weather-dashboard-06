function fetch(apiURL)
let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.49&lon=111.926109&exclude=hourly,daily&appid=44e2b3699341d2a3a6d507833c150d02"
.then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              displayIssues(data);     

