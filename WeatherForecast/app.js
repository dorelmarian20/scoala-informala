let currentState = {};

async function weatherNow() {
  let hiddenItem = document.querySelector(".hidden");
  let city = document.querySelector(".city").value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=4bfd7f1b71e329b4717dd5ddb19d9e45&units=metric&q=${city}`
  );
  currentState = await response.json();
  if (city.value === null) {
    hiddenItem.classList.add("hidden");
  } else {
    hiddenItem.classList.remove("hidden");
  }

  draw();
}

function draw() {
  document.querySelector(
    ".image"
  ).src = `http://openweathermap.org/img/w/${currentState.weather[0].icon}.png`;
  document.querySelector(".description").innerHTML =
    currentState.weather[0].description;
  document.querySelector(".humidity").innerHTML = currentState.main.temp + "%";
  document.querySelector(".pressure").innerHTML =
    currentState.main.pressure + " hPa";
  document.querySelector(".currentTemp").innerHTML =
    currentState.main.temp + "&#8451";
  document.querySelector(".minDay").innerHTML =
    currentState.main.temp_min + "&#8451";
  document.querySelector(".maxDay").innerHTML =
    currentState.main.temp_max + "&#8451";
  document.querySelector(
    ".maps"
  ).src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDd8I_yVKeCO3Nn7JAoxKXKdLdJcsIcF3I&q=${currentState.name}`;
}

async function weatherForecast() {
  let hiddenItem = document.querySelector(".hidden");
  let city = document.querySelector(".city").value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=4bfd7f1b71e329b4717dd5ddb19d9e45&units=metric&q=${city}`
  );
  currentState = await response.json();
  if (city.value === null) {
    hiddenItem.classList.add("hidden");
  } else {
    hiddenItem.classList.remove("hidden");
  }
  drawForecast();
}
function drawForecast() {
  document.querySelector(".forecastCity").innerHTML = currentState.city.name;
  document.querySelector(".forecastCountry").innerHTML =
    currentState.city.country;
  let dayElements = document.querySelectorAll(".day");
  dayElements.forEach(function (day) {
    day.innerHTML = "";
  });
  let dayIndex = 0;
  let dateTime = currentState.list[0].dt_txt.split(" ");
  let day = dateTime[0];

  dayElements[dayIndex].innerHTML = `<h3>${dateTime[0]}</h3>`;

  for (let i = 0; i < parseInt(dateTime[1]) / 3; i++) {
    dayElements[dayIndex].innerHTML = `<div></div>`;
  }

  for (let i = 0; i < currentState.list.length; i++) {
    let dateTime = currentState.list[i].dt_txt.split(" ");
    let date = dateTime[0];
    let time = dateTime[1];

    if (day !== date) {
      dayIndex++;
      day = date;

      dayElements[dayIndex].innerHTML = `<h3>${date}</h3>`;
    }

    dayElements[dayIndex].innerHTML = `<div >
                  <img src="http://openweathermap.org/img/w/${currentState.list[i].weather[0].icon}.png">
                  <p>Time: ${time}</p>
                  <p>Current Temp: ${currentState.list[i].main.temp} &#8451</p>
                  <p>Description: ${currentState.list[i].weather[0].description}</p>
              </div>`;
  }
}
