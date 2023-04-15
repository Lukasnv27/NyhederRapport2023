// const getNews = async () => {
//   const url =
//     "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a6d41776d874aebb922967d2ec6e56d";
//   const category = getFavoriteCategory();
//   if (category == null) {
//     category = "general";
//   }
//   // I dette eksempel benyttes await til at vente på at fetch metoden har returneret et svar og json
//   //metoden har parsed indholdet til et JavaScript objekt, inden videre kodeudførelse fortsætter.
//   // Dette sikrer at der ikke forsøges at benytte data fra en asynkron operation, før den er færdig.
//   let response = await fetch(url + "&category=" + category, {
//     method: "GET",
//   });
//   const news = await response.json();
//   console.log(news);

//   let favoriteArticles = getFavoriteArticles();

//   for (let i = 0; i < 7; i++) {
//     //Her bestemmes der hvad jeg vil hente i mit api arkiv altså billedernes url
//     let urlToImg = news.articles[i].urlToImage;
//     //Nu bestemmer jeg hvilke steder billederne skal indsættes i min HTML. Jeg kan benytte "picture_upload_"+i da jeg har nummerede mine img id'er med en endelse fra 0-6
//     let pictureUpload = document.getElementById("pictureUpload" + i);
//     //Jeg sætter nu picture_upload.src lig med urt_to_img hvilket fortæller at jeg gerne vil have url'en på image ind på picture_uploads plads
//     pictureUpload.src = urlToImg;

//     let authorArticle = news.articles[i].author;
//     let authorUpload = document.getElementById("authorUpload" + i);
//     authorUpload.innerText = authorArticle;

//     let titleArticleApi = news.articles[i].title;
//     let titleUpload = document.getElementById("titleUpload" + i);
//     titleUpload.innerText = titleArticleApi;

//     let urlToArticle = news.articles[i].url;
//     let urlUpload = document.getElementById("urlUpload" + i);
//     urlUpload.href = urlToArticle;

//     if (favoriteArticles.indexOf(urlToArticle) != -1) {
//       //article is in user's favorites
//       const favoriteButton = document.querySelector("#favoriteButton" + i);
//       favoriteButton.classList.remove("fa-regular");
//       favoriteButton.classList.add("fa-solid");
//     }
//   }
// };



// Her gør jeg klar til at fecth min nyheds API
const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const apiKey = "7accb7cc82db4eaaa46f779aba484c45";

const headers = {
    'Authorization': `Bearer ${apiKey}`
};

// Her laver jeg en funktion til at fetch nyhederne
const getArticles = async () => {
    const response = await fetch(apiUrl + apiKey, 
        {
            method: 'GET',
            headers: headers,
        }
    );

    // Her laver jeg konstanten data, som tager fat i min API, og er dén jeg kalder på nedenunder
    const news = await response.json();
    console.log(news);
  let favoriteArticles = getFavoriteArticles();

  for (let i = 0; i < 7; i++) {
    //Her bestemmes der hvad jeg vil hente i mit api arkiv altså billedernes url
    let urlToImg = news.articles[i].urlToImage;
    //Nu bestemmer jeg hvilke steder billederne skal indsættes i min HTML. Jeg kan benytte "picture_upload_"+i da jeg har nummerede mine img id'er med en endelse fra 0-6
    let pictureUpload = document.getElementById("pictureUpload" + i);
    //Jeg sætter nu picture_upload.src lig med urt_to_img hvilket fortæller at jeg gerne vil have url'en på image ind på picture_uploads plads
    pictureUpload.src = urlToImg;

    let authorArticle = news.articles[i].author;
    let authorUpload = document.getElementById("authorUpload" + i);
    authorUpload.innerText = authorArticle;

    let titleArticleApi = news.articles[i].title;
    let titleUpload = document.getElementById("titleUpload" + i);
    titleUpload.innerText = titleArticleApi;

    let urlToArticle = news.articles[i].url;
    let urlUpload = document.getElementById("urlUpload" + i);
    urlUpload.href = urlToArticle;

    if (favoriteArticles.indexOf(urlToArticle) != -1) {
      //article is in user's favorites
      const favoriteButton = document.querySelector("#favoriteButton" + i);
      favoriteButton.classList.remove("fa-regular");
      favoriteButton.classList.add("fa-solid");
    }
  }

}

getArticles();


async function searchNews() {
  let searchBox = document.getElementById("searchBox"); // skal hente data fra dette id
  let selectDropdown = document.getElementById("langagesDropdown"); // skal hente data fra dette id
  let url =
    "https://newsapi.org/v2/everything?apiKey=3a6d41776d874aebb922967d2ec6e56d" +
    "&q=" +
    encodeURIComponent(searchBox.value) +
    "&language=" +
    selectDropdown.value;
  let response = await fetch(url, {
    method: "GET",
  });
  const news = await response.json();
  console.log(news);

  for (let i = 0; i < 7; i++) {
    let urlToImg = news.articles[i].urlToImage;
    let pictureUpload = document.getElementById("pictureUpload" + i);
    pictureUpload.src = urlToImg;

    let authorArticle = news.articles[i].author;
    let authorUpload = document.getElementById("authorUpload" + i);
    authorUpload.innerText = authorArticle;

    let titleArticleApi = news.articles[i].title;
    let titleUpload = document.getElementById("titleUpload" + i);
    titleUpload.innerText = titleArticleApi;

    let urlToArticle = news.articles[i].url;
    let urlUpload = document.getElementById("urlUpload" + i);
    urlUpload.href = urlToArticle;
  }
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
