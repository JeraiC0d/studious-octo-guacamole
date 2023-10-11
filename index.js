function showTemperature(response){
    let temperature = Math.round(response.data.main.temp);
    let currentTemperature = document.querySelector("#temperature");
    currentTemperature.innerHTML=temperature;
    let city = document.querySelector("h1")
    city.innerHTML = response.data.name
  }
  
  function searchCity(city) {
    let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-city").value;
    searchCity(city);
  
  }
  
  function displayWeather(event){
    event.preventDefault();
    let weather = document.querySelector("displayWeather").value;
    displayWeather(weather);
  
  }
  let formElement = document.querySelector("#search-form");
  formElement.addEventListener("submit", handleSubmit);
  
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
  }
  
  
  let now = new Date();
  
  
  let h2 = document.querySelector("h2");
  
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  
  
  let date = now.getDate();
  let year = now.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]
  
  let month = months[now.getMonth()];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];
  
  h2.innerHTML = `${day}, ${date}, ${month},${year}, ${hours}:${minutes}:${seconds}`;