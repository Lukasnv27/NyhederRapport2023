 let dato = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
document.getElementById("theDate").innerHTML = dato;  // Viser datoen i HTML dokumentet 
 

function updateTime() {
  // Get the current time
  const date = new Date();

  // Get the hours, minutes, and seconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the time as a string
  const timeString = hours + ":" + minutes + ":" + seconds;

  // Get the element with the id "timer"
  const timerElement = document.getElementById("timer");

  // Set the text of the element to the current time
  timerElement.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Ovenstående kode er til dels udarbejdet af https://chat.openai.com/chat
// og til dels udarbejdet ved brug af https://www.w3schools.com/js/js_timing.asp
// https://www.w3schools.com/php/func_date_getdate.asp
// og GitHub Copilot