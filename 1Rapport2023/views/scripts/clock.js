// Her laver jeg tid og dag

//Kilde Adile
let clock = document.getElementById("time");
  
function time() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clock.textContent =
  ("0" + hours).slice(-2) +
  ":" +
  ("0" + minutes).slice(-2) +
  ":" +
  ("0" + seconds).slice(-2);
} //-2 betyder at jeg beholder de to sidste cifre i elementet
setInterval(time, 1000);


const today = new Date(); 
document.getElementById("date").innerHTML = today;








// const todaysDate = new Date(); // Dagens dato

// var span = document.getElementById('span');

// function time() { //Funktion til tiden som bliver kaldt i et interval
//     let seconds = todaysDate.getSeconds();
//     let minutes = todaysDate.getMinutes();
//     let hours = todaysDate.getHours();
//     span.textContent =
//         hours + ":" + minutes + ":" + seconds;
// }
// setInterval(time, 1) // Kalder på funktionen hvert millisekund, så den opdaterer samtidig som enhedens tid

// // Her laver jeg dato
// const todaysDay = todaysDate.getDate();
// document.getElementById('dateDay').innerHTML=todaysDay

// // indsætter ugedagen
// const todaysWeekday = todaysDate.getDay();
//     if (todaysWeekday === 1) {
//         document.getElementById('dateWeekday').innerHTML='Mandag'
//     } else if (todaysWeekday === 2) {
//         document.getElementById('dateWeekday').innerHTML='Tirsdag'
//     } else if (todaysWeekday === 3) {
//         document.getElementById('dateWeekday').innerHTML='Onsdag'
//     } else if (todaysWeekday === 4) {
//         document.getElementById('dateWeekday').innerHTML='Torsdag'
//     } else if (todaysWeekday === 5) {
//         document.getElementById('dateWeekday').innerHTML='Fredag'
//     } else if (todaysWeekday === 6) {
//         document.getElementById('dateWeekday').innerHTML='Lørdag'
//     } else if (todaysWeekday === 0) {
//         document.getElementById('dateWeekday').innerHTML='Søndag'
//     }

// // Indsætter måneden
// const todaysMonth = todaysDate.getMonth()+1;
//     if (todaysMonth === 1) {
//         document.getElementById('dateMonth').innerHTML='Januar'
//     } else if (todaysMonth === 2) {
//         document.getElementById('dateMonth').innerHTML='Februar'
//     } else if (todaysMonth === 3) {
//         document.getElementById('dateMonth').innerHTML='Marts'
//     } else if (todaysMonth === 4) {
//         document.getElementById('dateMonth').innerHTML='April'
//     } else if (todaysMonth === 5) {
//         document.getElementById('dateMonth').innerHTML='Maj'
//     } else if (todaysMonth === 6) {
//         document.getElementById('dateMonth').innerHTML='Juni'
//     } else if (todaysMonth === 7) {
//         document.getElementById('dateMonth').innerHTML='Juli'
//     }else if (todaysMonth === 8) {
//         document.getElementById('dateMonth').innerHTML='August'
//     } else if (todaysMonth === 9) {
//         document.getElementById('dateMonth').innerHTML='September'
//     } else if (todaysMonth === 10) {
//         document.getElementById('dateMonth').innerHTML='Oktober'
//     }else if (todaysMonth === 11) {
//         document.getElementById('dateMonth').innerHTML='November'
//     } else if (todaysMonth === 12) {
//         document.getElementById('dateMonth').innerHTML='December'
//     }

// // Indsætter året
// const dateYear = todaysDate.getFullYear()
// document.getElementById('dateYear').innerHTML=dateYear