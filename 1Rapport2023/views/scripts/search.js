
// Her har jeg min search funktion som henter api'en med det søgeord som brugeren har indtastet
// const search = async() => 
// window.search = 
async function search() {

// let apiKeySearch = '7accb7cc82db4eaaa46f779aba484c45'
let apiKeySearch = '3a6d41776d874aebb922967d2ec6e56d'

    let searchkeyWord = document.getElementById('searchBarFieldInput') // henter indtastet søgeord
    let selectDropdown = document.getElementById('langagesDropdown') // skal hente data fra dette id




    // let url = "https://newsapi.org/v2/everything?apiKey=" + apiKeySearch + "&q=" + encodeURIComponent(searchkeyWord) + "&language=" + selectBropdown
    // let url = "https://newsapi.org/v2/everything?apiKey=" + apiKeySearch +"&q="+ encodeURIComponent(searchkeyWord.value)+ "&language="+ selectDropdown
    // const url = `https://newsapi.org/v2/everything?q=${searchkeyWord}&from=2022-12-08&sortBy=popularity&apiKey=${apiKeySearch}`
    var url = "https://newsapi.org/v2/everything?apiKey=3a6d41776d874aebb922967d2ec6e56d"+"&q="+ encodeURIComponent(searchkeyWord.value) + "&language="+ text 

    let response = await fetch(url,
        {
        method: 'GET', 
        }
    );
    const data = await response.json();
    console.log(data)


    // Her laver jeg et forloop, som går gennem artiklerne og henter nedenstående. Jeg har sat i < 6, da jeg som udgangspunkt kun vil have 6 artikler.
    for (let i = 1; i < 7; i++) { // Lige nu begrænset
        
        // Her siger jeg at der ved small articles skal laves en div for hver artikel
        let smallArticlesSearch = document.createElement('div');
        smallArticlesSearch.classList.add('smallArticles');


            // Her henter jeg billede af API arrayet og appender det i smallArticlesSearch
            let articlePicture = document.createElement('img');
            articlePicture.classList.add("smallArticlePicture");
            articlePicture.src = data.articles[i].urlToImage;
            smallArticlesSearch.appendChild(articlePicture);

            // Her henter jeg artiklens titel fra API arrayet og appender det i smallArticlesSearch
            let articleTitle = document.createElement('p');
            articleTitle.classList.add("smallArticleText");
            articleTitle.textContent = data.articles[i].title;
            smallArticlesSearch.appendChild(articleTitle);

            // Her henter jeg artiklens source fra API arrayet og appender denne i smallArticlesSearch
            let articleSource = document.createElement('div');
            articleSource.classList.add("smallArticleSource");
            articleSource.textContent = data.articles[i].source.name;
            smallArticlesSearch.appendChild(articleSource);

            // Her henter jeg url'en til artiklen fra API arrayet og appender denne i smallArticleSource
            let articleReadMore = document.createElement('a');
            articleReadMore.classList.add("smallArticleReadMoreButton");
            let readMoreText = document.createTextNode("Read more")
            articleReadMore.appendChild(readMoreText)
            articleReadMore.href = data.articles[i].url;
            articleSource.appendChild(articleReadMore);

            // indsætter
            otherArticles.appendChild(smallArticlesSearch)
    }
}

search()