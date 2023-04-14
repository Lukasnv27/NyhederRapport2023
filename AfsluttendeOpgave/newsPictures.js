const url ="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b77b205d3f61467184136ae49e1d214d";

fetch(url)
  .then((response) => response.json())    // Convert data to json
  .then((data) => {
    console.log(data) 

    let news = data.articles; // Store the news items in a variable
    let output = ""; // Create an empty string to store the HTML

    for (let i = 0; i < 1 ; i++) {  // Loop through the news items
      output += `                                                    
      <div class="newsHeader">                                       
      <div id="img1Header">                                          
      <img src="${news[i].urlToImage}" alt="news image" width="600" height="200">
      </div> 
      <h2 id="titleBoxHeader">${news[i].title}</h2>                 
      <div id="bottomSquareHeader">
        <p id="creatorBoxHeader">${news[i].source.name}</p>      
        <div id="readMoreBtn">
        <a id="track" onclick=track() href="${news[i].url}" target="_blank" onclick=track()>Read more</a>
        </div>
      </div>
      </div>
      `;
    } 

    document.getElementById("createdBy").innerHTML = output; // Add the HTML to the page

    let news1 = data.articles;
    let output1 = "";

    for (let i = 1; i < 2 ; i++) {
      output1 += `
      <div class="news">
      <div id="img1">
      <img src="${news1[i].urlToImage}" alt="news image" width="150" height="60">
      </div>
      <p id="titleBox">${news1[i].title}</p>
      <div id="bottomSquare">
        <p id="creatorBox">${news1[i].source.name}</p>
        <div id="readMoreBtn">
        <a id="track1" onclick=track1() href="${news1[i].url}" target="_blank" onclick=track()>Read more</a>
        </div>
        <div id="favoriteBtn1">
        <button onclick="addFavorite1()">Favorite</button>
        </div>
      </div>
      
      </div>
      `;
    }

    document.getElementById("createdBy1").innerHTML = output1;

    let news2 = data.articles;
    let output2 = "";

    for (let i = 2; i < 3 ; i++) {
      output2 += `
      <div class="news">
      <div id="img1">
      <img src="${news2[i].urlToImage}" alt="news image" width="150" height="60">
      </div>
      <p id="titleBox">${news2[i].title}</p>
      <div id="bottomSquare">
        <p id="creatorBox">${news2[i].source.name}</p>
        <div id="readMoreBtn">
        <a id="track2" onclick=track2() href="${news2[i].url}" target="_blank" onclick=track()>Read more</a>
        </div>
        <div id="favoriteBtn2">
        <button onclick="addFavorite2()">Favorite</button>
        </div>
      </div>
      </div>
      `;
    }

    document.getElementById("createdBy2").innerHTML = output2;

    let news3 = data.articles;
    let output3 = "";

    for (let i = 3; i < 4 ; i++) {
      output3 += `
      <div class="news">
      <div id="img1">
      <img src="${news3[i].urlToImage}" alt="news image" width="150" height="60">
      </div>
      <p id="titleBox">${news3[i].title}</p>
      <div id="bottomSquare">
        <p id="creatorBox">${news3[i].source.name}</p>
        <div id="readMoreBtn">
        <a id="track3" onclick=track3() href="${news3[i].url}" target="_blank" onclick=track()>Read more</a>
        </div>
        <div id="favoriteBtn3">
        <button onclick="addFavorite3()">Favorite</button>
        </div>
      </div>
      </div>
      `;
    }

    document.getElementById("createdBy3").innerHTML = output3;

    let news4 = data.articles;
    let output4 = "";

    for (let i = 4; i < 5 ; i++) {
      output4 += `
      <div class="news">
      <div id="img1">
      <img src="${news4[i].urlToImage}" alt="news image" width="150" height="60">
      </div>
      <p id="titleBox">${news4[i].title}</p>
      <div id="bottomSquare">
        <p id="creatorBox">${news4[i].source.name}</p>
        <div id="readMoreBtn">
        <a id="track4" onclick=track4() href="${news4[i].url}" target="_blank" onclick=track()>Read more</a>
        </div>
        <div id="favoriteBtn4">
        <button onclick="addFavorite4()">Favorite</button>
        </div>
      </div>
      </div>
      `;
    }

    document.getElementById("createdBy4").innerHTML = output4;

    let news5 = data.articles;
    let output5 = "";

    for (let i = 5; i < 6 ; i++) {
      output5 += `
      <div class="news">
      <div id="img1">
      <img src="${news5[i].urlToImage}" alt="news image" width="150" height="60">
      </div>
      <p id="titleBox">${news5[i].title}</p>
      <div id="bottomSquare">
        <p id="creatorBox">${news5[i].source.name}</p>
        <div id="readMoreBtn">
        <a id="track5" onclick=track5() href="${news5[i].url}" target="_blank" onclick=track()>Read more</a>
        </div>
        <div id="favoriteBtn5">
        <button onclick="addFavorite5()">Favorite</button>
        </div>
      </div>
      </div>
      `;
    }

    document.getElementById("createdBy5").innerHTML = output5;

    let news6 = data.articles;
    let output6 = "";

    for (let i = 6; i < 7 ; i++) {
      output6 += `
      <div class="news">
      <div id="img1">
      <img src="${news6[i].urlToImage}" alt="news image" width="150" height="60">
      </div>
      <p id="titleBox">${news6[i].title}</p>
      <div id="bottomSquare">
        <p id="creatorBox">${news6[i].source.name}</p>
        <div id="readMoreBtn">
        <a id="track6" onclick=track6() href="${news6[i].url}" target="_blank" onclick=track()>Read more</a>
        </div>
        <div id="favoriteBtn6">
        <button onclick="addFavorite6()">Favorite</button>
        </div>
      </div>
      </div>
      `;
    }

    document.getElementById("createdBy6").innerHTML = output6;
  }); 

 
  function track() { //function to track the read more button
    let track = document.getElementById("track"); //get the id of the read more button
    localStorage.setItem("track", track); //set the id of the read more button to local storage
    console.log(track); //log the id of the read more button to the console and in that way track it
  }

  function track1() {
    let track1 = document.getElementById("track1");
    localStorage.setItem("track1", track1);
    console.log(track1);
  }
  
  function track2() {
    let track2 = document.getElementById("track2");
    localStorage.setItem("track2", track2);
    console.log(track2);
  }
  
  function track3() {
    let track3 = document.getElementById("track3");
    localStorage.setItem("track3", track3);
    console.log(track3);
  }
  
  function track4() {
    let track4 = document.getElementById("track4");
    localStorage.setItem("track4", track4);
    console.log(track4);
  }
  
  function track5() {
    let track5 = document.getElementById("track5");
    localStorage.setItem("track5", track5);
    console.log(track5);
  }
  
  function track6() {
    let track6 = document.getElementById("track6");
    localStorage.setItem("track6", track6);
    console.log(track6);
  }

// Ovenstående kode er til dels udarbejdet af https://chat.openai.com/chat
// og https://www.youtube.com/watch?v=QO4NXhWo_NM
// Samt brug af https://hait.cbss.dk/weeks/uge-46.html som inspiration

 /*const searchbar = document.getElementById("searchbar");

searchbar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;
  const filteredNews = news.filter((news) => {
    return (
      news.title.toLowerCase().includes(searchString.toLowerCase()) ||
      news.source.name.toLowerCase().includes(searchString.toLowerCase())
    ); */