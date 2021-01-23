async function draw() {
    let pet = document.querySelector("#options").value;
    let url = "";
    if (pet === "Nerdy") {
      let r = await fetch(
        "http://api.icndb.com/jokes/random?limitTo=[nerdy]"
      );
      let json = await r.json();
      url = json.value.joke;
    } else if (pet === "Explicit") {
      let r = await fetch(
        "http://api.icndb.com/jokes/random?limitTo=[explicit]"
      );
      let json = await r.json();
      url = json.value.joke;
    } else if (pet === "Chuck Norris") {
      let r = await fetch(
        "http://api.icndb.com/jokes/random?firstName=Chuck&lastName=Norris"
      );
      let json = await r.json();
      url = json.value.joke;
    }
    document.querySelector("#text").innerText = url;
  }