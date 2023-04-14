
const result = async () => {
  const småBox = document.getElementById("småBox"); //henter små box fordi det er der jeg gerne vil lægge det ind i
  småBox.innerHTML = " "; //nulstiller mine 6 bokse

  const result = await fetch(
    "https://newsapi.org/v2/everything?q=keyword&apiKey=b57f6dc7b72c46d097591637d89ae19f"
  ).then((r) => {
    return r.json();
  });
  //STOR BOX
  let photoLatestNews = document.createElement("img");
  photoLatestNews.classList.add("photoLatestNews");
  photoLatestNews.src = result.articles[0].urlToImage;
  latestNews.append(photoLatestNews);
  
  
  let titleLatestNews = document.createElement("h1");
  titleLatestNews.classList.add("titleLatestNews");
  titleLatestNews.textContent = result.articles[0].title;
  latestNews.append(titleLatestNews);
  
  let authorLatestNews = document.createElement("h1");
  authorLatestNews.classList.add("authorLatestNews");
  authorLatestNews.textContent = result.articles[0].source.name;
  latestNews.append(authorLatestNews);
  
  let readmoreLatestNews = document.createElement("form"); //tag form
  readmoreLatestNews.classList.add("readmoreLatestNews");
  let readmoreButtonLN = document.createElement("button"); //laver en button
  readmoreButtonLN.innerHTML = "Read more"; //navnet inde i knappen
  readmoreButtonLN.classList.add("readmoreButtonLN");
  readmoreLatestNews.action = result.articles[0].url; //lægger jeg linket i form
  latestNews.append(readmoreLatestNews); //der skal være en button i readmore
  readmoreLatestNews.append(readmoreButtonLN);
  
  console.log(result);
  
  //Denne funktion virker ikke optimalt, men det er således jeg har tænkt mig at tilføje mine favoritter til localstorage
  // var favA = titleLatestNews.value;
  // var tomtHjerte = document.getElementById("latestNews");
  // tomtHjerte.addEventListener("click", like);
  
  // function like(){
    //   tomtHjerte.innerHTML = "fyldthjerte.png";
    //   localStorage.setItem("favAoritArtikler", favA);
    // }
    
    let counter2 = 0
    for (let index = 1; index < 7; index++) {
      counter2++;
      //looper igennem 6 forskellige nyheder
      
      // div til box småbox - billede senestNyt6 - tittle - publisher - knap
      
      let senestNyt6 = document.createElement("div"); //giver små box et div gennem
      senestNyt6.classList.add("senestNyt6"); //giver den en class så jeg kan style den
      
    let photo6 = document.createElement("img");
    photo6.classList.add("photo6");
    photo6.src = result.articles[index].urlToImage;
    senestNyt6.append(photo6);
    
    
    let title6 = document.createElement("div");
    title6.classList.add("title6");
    title6.textContent = result.articles[index].title; //det element med min skrifttype, skal så være .textcontent og det skal være lig med det der står i mit api. Det skal starte fra index, det vil sige 0
    senestNyt6.append(title6); //med denne linje appender jeg det til min tekstbox
    
    let author6 = document.createElement("div");
    author6.classList.add("author6");
    author6.innerHTML = result.articles[index].source.name;
    senestNyt6.append(author6);
    
    let readmore = document.createElement("form"); //tag form
    let readMore6Button = document.createElement("button"); //laver en button
    readMore6Button.classList.add("readMore6Button" + counter2);
    readMore6Button.innerHTML = "Read more"; //navnet inde i knappen
    readmore.action = result.articles[index].url;
    readmore.append(readMore6Button); //der skal være en button i readmore
    author6.append(readmore); //den skal så append il alle 6
    
    småBox.appendChild(senestNyt6); //senestNyt6(div) bliver et child til småbox(Div i HTML)
  }
  
  
  let clock = document.getElementById("clock");
  
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
};


const today = new Date(); 
document.getElementById("date").innerHTML = today;


result();

function logUdButton(){
  let logUdButton = document.getElementById("logUdButton");
  localStorage.removeItem("email");
  window.location.href = "http://127.0.0.1:5500/login/login.html"
};

function opretBrugerButton (){
  let opretBrugerButton = document.getElementById("opretBrugerButton");
  window.location.href = "http://127.0.0.1:5500/signuptest/signup.html"
}