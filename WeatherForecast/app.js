let informations = [];
let date = [];

function displayWeather() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      informations = JSON.parse(this.responseText);
      drawTable();
    }
  };
  xhttp.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${
      document.getElementById("city").value
    }`,
    true
  );
  xhttp.send();
}

function drawTable() {
  document.getElementById(
    "icon"
  ).src = `http://openweathermap.org/img/w/${informations.weather[0].icon}.png`;
  document.getElementById("description").innerHTML =
    informations.weather[0].description;
  document.getElementById("pressure").innerHTML = informations.main.pressure;
  document.getElementById("humidity").innerHTML = informations.main.humidity;
  document.getElementById("temp").innerHTML = informations.main.temp;
  document.getElementById("min").innerHTML = informations.main.temp_min;
  document.getElementById("max").innerHTML = informations.main.temp_max;
  document.getElementById(
    "coordonateHarta"
  ).src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDNCgmnHqiOuRvdBGN8NapDtH3wZb-Xikk
                        &q=${informations.coord.lat},${informations.coord.lon}&zoom=12`;
}
function displayForecast() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      date = JSON.parse(this.responseText);
      console.log(date);
      drawTable2();
    }
  };

  xhttp.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${
      document.getElementById("city").value
    }`,
    true
  );
  xhttp.send();
}

function drawTable2() {
  let contor = 0;
  let dayBefore = null;
  let str2 = "";
  let str = "";

  for (var i = 0; i < date.list.length; i++) {
    if (dayBefore !== date.list[i].dt_txt.substring(0, 10)) {
      if (contor !== 0) {
        str = `<h3>Day: ${date.list[i].dt_txt.substring(8, 10)}/${date.list[
          i
        ].dt_txt.substring(5, 7)}/${date.list[i].dt_txt.substring(0, 4)}</h3>
                               `;

        document.getElementById("day" + contor).innerHTML = str + str2;
        str2 = "";
      }

      contor++;

      dayBefore = date.list[i].dt_txt.substring(0, 10);
    }
    str2 += `<img id="icon" src="http://openweathermap.org/img/w/${
      date.list[i].weather[0].icon
    }.png"><br />  
             Hour:<span id="hour">${date.list[i].dt_txt.substring(
               11,
               16
             )}</span><br />
                            Temperature:<span id="tempForecast"></span>${
                              date.list[i].main.temp
                            }<br />
                            Description:<span id="descriptionForecast">${
                              date.list[i].weather[0].description
                            }</span><br />`;
  }

  document.getElementById("day" + contor).innerHTML = str + str2;
}
