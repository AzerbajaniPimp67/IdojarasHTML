let link = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=sunrise,sunset&hourly=temperature_2m&timezone=Europe%2FBerlin";

fetch(link)
.then(response => {
    if (!response.ok) {
        throw new Error("Hiba van!");
    }
return response.json();
})
.then(json => {
    let date = json.daily.time[0];
    let napkelte = json.daily.sunrise[0];
    let napnyugta = json.daily.sunset[0];
    let Ho = json.hourly.temperature_2m[0];

    document.getElementById("date").textContent = "Dátum: " + date;
    document.getElementById("sunrise").textContent = "Napkelte: " + napkelte;
    document.getElementById("sunset").textContent = "Napnyugta: " + napnyugta;
    document.getElementById("temp").textContent = "Hőmérséklet: " + Ho + " °C";
})
    .catch(err => console.error(err));