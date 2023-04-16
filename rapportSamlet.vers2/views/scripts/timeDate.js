//Jeg starter med at oprette en funktion ved navn updateDate
function updateDate(){
//Jeg opretter et nyt Date object og tildele det "d" variablen. Dette repræsentere nuværende tid og dato
    let d = new Date();
//Nu kaldes toLocaleString() på variable "d" for at convetere dato og tid til en string i en specefik format. 
//"da-DK" benyttes til at specificere at dato og tid skal følge de danske konventioner 
//Muligheds objekterne som toLocaleString modtager fortæller at tid skal vises i 24 timers format med "hours", "minutes" og "seconds".
    let time = d.toLocaleString('da-DK',{
        hour:"numeric", minute:"numeric", 
        second:"numeric"
        }
    );
//Nu diffineres to arrays; 
//dayNames som indeholder alle ugens dage og har et index hvor 0 = søndag, 1 = mandag osv
//monthNames som indeholder årets måneder og har et index hvor 0 = januar, 1 = febuar osv
    const dayNames = [
        'Søndag', 'Mandag',
        'Tirsdag', 'Onsdag', 
        'Torsdag', 'Fredag', 'Lørdag'
    ];
    const monthNames = [
        "Januar", "Febuar", 
        "Marts", "April", "Maj", 
        "Juni", "Juli", "August", 
        "September", "October", 
        "November", "December"
    ];
//Nu benyttes "getElementById" metoden to at hente HTML elementerne med id'erne "time" og "date "
//"innerHTML" egenskaben for elementerne indstilles derfefter til tid og dato strings, hvilket får dem til at blive vist på min hjemmeside
    document.getElementById('time').innerHTML = time;
// Indholdet af elementet med ID "date" opdateres med den formaterede datoværdi
// Datoværdien består af dagens navn (hentet fra arrayet dayNames), månedens navn (hentet fra arrayet monthNames),
// dagens nummer (returneret af metoden getDate()) og årstallet (returneret af metoden getFullYear())
    document.getElementById('date').innerHTML = 
    `${dayNames[d.getDay()]} d.
    ${d.getDate()}.
    ${monthNames[d.getMonth()]} 
    ${d.getFullYear()}`;
}
//Til sidst har jeg en setInterval funktion som bliver brugt til at kalde på min anden funktion "updateDate" hvert 1000 millisekound
//Dette gør at mit digitale ur og dato opdateres hvert sekound
setInterval(updateDate, 1000);

//https://codepen.io/scriptax/pen/ExRVamb
