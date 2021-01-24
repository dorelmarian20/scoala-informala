var stareaCurenta = {};

async function weatherNow() {
  var oras = document.querySelector(".oras").value;
  var response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${oras}`
  );
  window.stareaCurenta = await response.json();
  draw();
}

function draw() {
  document.querySelector(
    ".imagine"
  ).src = `http://openweathermap.org/img/w/${stareaCurenta.weather[0].icon}.png`;
  document.querySelector(".descriere").innerHTML =
    stareaCurenta.weather[0].description;
  document.querySelector(".umiditate").innerHTML =
    stareaCurenta.main.temp + "%";
  document.querySelector(".presiune").innerHTML =
    stareaCurenta.main.pressure + " hPa";
  document.querySelector(".tempCurenta").innerHTML =
    stareaCurenta.main.temp + "&#8451";
  document.querySelector(".minZilei").innerHTML =
    stareaCurenta.main.temp_min + "&#8451";
  document.querySelector(".maxZilei").innerHTML =
    stareaCurenta.main.temp_max + "&#8451";
  document.querySelector(
    ".harta"
  ).src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDd8I_yVKeCO3Nn7JAoxKXKdLdJcsIcF3I&q=${stareaCurenta.name}`;
}

async function weatherForecast() {
  var oras = document.querySelector(".oras").value;
  var response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${oras}`
  );
  stareaCurenta = await response.json();
  drawForecast();
}

function drawForecast() {
  document.querySelector(".forecastCity").innerHTML = stareaCurenta.city.name;
  document.querySelector(".forecastCountry").innerHTML =
    stareaCurenta.city.country;
  var dayElements = document.querySelectorAll(".day");
  dayElements.forEach(function (day) {
    day.innerHTML = "";
  });
  var dayIndex = 0;
  var dateTime = stareaCurenta.list[0].dt_txt.split(" ");
  var day = dateTime[0];
  dayElements[dayIndex].innerHTML =
    dayElements[dayIndex].innerHTML + `<h3>${dateTime[0]}</h3>`;

  for (let i = 0; i < parseInt(dateTime[1]) / 3; i++) {
    dayElements[dayIndex].innerHTML =
      dayElements[dayIndex].innerHTML + `<div></div>`;
  }

  for (let i = 0; i < stareaCurenta.list.length; i++) {
    let dateTime = stareaCurenta.list[i].dt_txt.split(" ");
    var date = dateTime[0];
    var time = dateTime[1];

    if (day !== date) {
      dayIndex++;
      day = date;
      dayElements[dayIndex].innerHTML =
        dayElements[dayIndex].innerHTML + `<h3>${date}</h3>`;
    }
    dayElements[dayIndex].innerHTML =
      dayElements[dayIndex].innerHTML +
      `<div >
                    <img src="http://openweathermap.org/img/w/${stareaCurenta.list[i].weather[0].icon}.png">
                    <p>Time: ${time}</p>
                    <p>Current Temp: ${stareaCurenta.list[i].main.temp} &#8451</p>
                    <p>Description: ${stareaCurenta.list[i].weather[0].description}</p>
                </div>`;
  }
}
