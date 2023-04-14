document.addEventListener("DOMContentLoaded", (e) => {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/copenhagen?unitGroup=metric&elements=sunrise%2Csunset%2Cicon&key=7ZH8W4TAVRF69VBYLZ6XV9L5D&contentType=json") 
    .then((response) => response.json())
    .then((data) => { 
      console.log(data);

      let sunrise = document.getElementById("sunrise"); // Gets the sunrise element from the HTML document
      sunrise.innerText = data.days[0].sunrise; // Sets the sunrise time in the sunrise element

      let sunset = document.getElementById("sunset"); // Gets the sunset element from the HTML document
      sunset.innerText = data.days[0].sunset; // Sets the sunset time in the sunset element
    })
})

// Ovenstående kode er til dels udarbejdet af Github Copilot
// Derudvoer er følgende brugt til inspiration: https://hait.cbss.dk/weeks/uge-46.html