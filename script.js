const form = document.querySelector("form");
const API_KEY = `fdc88b1a8e7dbdb7bac0c4f7b74948d9`;

const search = document.querySelector("#search");
const whether = document.querySelector("#whether");

form.addEventListener("submit", function (a) {
  a.preventDefault();
  getwhether(search.value);
});

const getwhether = async (city) => {
  whether.innerHTML = `<h1>Loading...</h1>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`City not found: ${response.status}`);
    }

    const data = await response.json();
    return showdata(data);
  } catch (error) {
    whether.innerHTML = `<h1>Error: ${error.message}</h1>`;
    console.error("Error fetching weather data:", error);
  }
};

const showdata = (data) => {
  if (data.cod == "404") {
    whether.innerHTML = `<h1>City Not Found</h1>`;
    return;
  }

  console.log(data);
  whether.innerHTML = `
    <div id="main-card">
      <div id="under-main">
        <h1>${data.name}</h1>

        <div class="temp">
          <h5>Feels Like: ${data.main.feels_like}°C</h5>
          <h5>Visibility: ${data.visibility} meters</h5>
        </div>

        <div class="l-list">
          <h1>${data.main.temp}°C</h1>
          <h2>${data.weather[0].main}</h2>
        </div>
      </div>

      <div id="under-main-2">
        <i class="fa-solid fa-moon" id="pk"></i>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather" height="200" width="200">   
      </div>
    </div>
  `;

  const body = document.querySelector("body");

  if (data.weather[0].main === "Clear") {
    body.classList.add("clear");
  } else if (data.weather[0].main === "Haze") {
    body.classList.add("haze");
  } else if (data.weather[0].main === "Clouds") {
    body.classList.add("clouds");
  } else if (data.weather[0].main === "Rain") {
    body.classList.add("rain");
  } else if (data.weather[0].main === "Fog") {
    body.classList.add("fog");
  } else if (data.weather[0].main === "Storm") {
    body.classList.add("storm");
  } else if (data.weather[0].main === "Mist") {
    body.classList.add("mist");
  }
};
