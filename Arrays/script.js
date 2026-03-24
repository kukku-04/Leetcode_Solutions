const apiKey = "2c4bbb9c5222c90fca2526ebc750f73a";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
const errorMsg = document.getElementById("errorMsg");

searchBtn.addEventListener("click", getWeather);

function getWeather() {
    const city = cityInput.value;

    if (city === "") {
        errorMsg.innerText = "Please enter a city name";
        return;
    }

    errorMsg.innerText = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                errorMsg.innerText = "City not found";
                return;
            }

            temperature.innerText = Math.round(data.main.temp) + "°C";
            condition.innerText = data.weather[0].main;
            humidity.innerText = data.main.humidity + "%";
            wind.innerText = data.wind.speed + " km/h";

            const iconCode = data.weather[0].icon;
            weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        })
        .catch(() => {
            errorMsg.innerText = "Something went wrong!";
        });
}
      const darkBtn = document.getElementById("darkModeBtn");

   darkBtn.addEventListener("click", () => {
       document.body.classList.toggle("dark");
});
   if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js")
          .then(() => console.log("Service Worker Registered"));
}

const cityInput = document.getElementById("cityInput");

const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stops page reload
    getWeather();       // calls weather function
});

cityInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});
cityInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

