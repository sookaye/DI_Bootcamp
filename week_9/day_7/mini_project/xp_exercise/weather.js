const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
let unit = "metric"; // Celsius by default

const cityInput = document.querySelector("#city-input");
const form = document.querySelector("form");
const weatherCard = document.querySelector("#weather-card");
const toggleUnitBtn = document.querySelector("#toggle-unit");
const previousSearches = document.querySelector("#previous-searches");

let searches = [];

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        displayError("City not found");
        return;
      }
      const cityData = {
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: data.main.temp,
        humidity: data.main.humidity,
      };
      displayWeather(cityData);
      searches.push(cityData);
      displayPreviousSearches();
    })
    .catch((error) => console.log(error));
}

function displayWeather(data) {
  weatherCard.innerHTML = `
    <h2>${data.city}, ${data.country}</h2>
    <p>${data.weather}</p>
    <img src="https://openweathermap.org/img/wn/${data.icon}.png" alt="${data.weather}">
    <p>${data.temp} °${unit === "metric" ? "C" : "F"}</p>
    <p>Humidity: ${data.humidity}%</p>
  `;
}

function displayError(message) {
  weatherCard.innerHTML = `<p>${message}</p>`;
}

function displayPreviousSearches() {
  previousSearches.innerHTML = "";
  searches.forEach((search) => {
    const searchDiv = document.createElement("div");
    searchDiv.classList.add("previous-search");
    searchDiv.textContent = `${search.city}, ${search.country}`;
    previousSearches.appendChild(searchDiv);
  });
}

function toggleUnit() {
  unit = unit === "metric" ? "imperial" : "metric";
  const temperatureElems = document.querySelectorAll("#weather-card p:nth-child(4)");
  temperatureElems.forEach((elem) => {
    const temp = parseFloat(elem.textContent);
    elem.textContent = convertTemperature(temp);
  });
}

function convertTemperature(temp) {
  if (unit === "metric") {
    return `${temp.toFixed(1)} °C`;
  } else {
    return `${(temp * 1.8 + 32).toFixed(1)} °F`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeather(city);
  cityInput.value = "";
});

toggleUnitBtn.addEventListener("click", toggleUnit);
