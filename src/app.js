function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "72fcc2019b422e7c2787f6b074b1f6d4";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
