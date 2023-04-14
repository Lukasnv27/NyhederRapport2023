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
    const data = await response.json();
    console.log(data);


    // Her laver jeg et forloop, som går gennem artiklerne og henter nedenstående. Jeg har sat i < 6, da jeg som udgangspunkt kun vil have 6 artikler.
    for (let i = 1; i < 7; i++) {
        
        // Her siger jeg at der ved small articles skal laves en div for hver artikel
        let smallArticles = document.createElement('div');
        smallArticles.classList.add('smallArticles');


            // Her henter jeg billede af API arrayet og appender det i smallArticles
            let articlePicture = document.createElement('img');
            articlePicture.classList.add("smallArticlePicture");
            articlePicture.src = data.articles[i].urlToImage;
            smallArticles.appendChild(articlePicture);

            // Her henter jeg artiklens titel fra API arrayet og appender det i smallArticles
            let articleTitle = document.createElement('p');
            articleTitle.classList.add("smallArticleText");
            articleTitle.textContent = data.articles[i].title;
            smallArticles.appendChild(articleTitle);

            // Her henter jeg artiklens source fra API arrayet og appender denne i smallArticle
            let articleSource = document.createElement('div');
            articleSource.classList.add("smallArticleSource");
            articleSource.textContent = data.articles[i].source.name;
            smallArticles.appendChild(articleSource);

            // Her henter jeg url'en til artiklen fra API arrayet og appender denne i smallArticleSource
            let articleReadMore = document.createElement('a');
            articleReadMore.classList.add("smallArticleReadMoreButton");
            let readMoreText = document.createTextNode("Read more")
            articleReadMore.appendChild(readMoreText)
            articleReadMore.href = data.articles[i].url;
            articleSource.appendChild(articleReadMore);

        // Her sætter jeg de små artikler ind
        let otherArticles = document.getElementById('otherArticles');
        otherArticles.appendChild(smallArticles)
    }

    // Her laver jeg forloop til main article
    for (let i = 0; i < 1; i++) {
        
         // Her siger jeg at der ved small articles skal laves en div for hver artikel
         let mainArticle = document.createElement('div');
         mainArticle.classList.add('mainArticle');

            // Her henter jeg billede af API arrayet og appender det i smallArticles
            articlePicture = document.createElement('img');
            articlePicture.classList.add('mainArticlePicture');
            articlePicture.src = data.articles[i].urlToImage;
            mainArticle.appendChild(articlePicture);

            // Her henter jeg artiklens titel fra API arrayet og appender det i smallArticles
            let articleTitle = document.createElement('p');
            articleTitle.classList.add('mainArticleText');
            articleTitle.classList.add('textOnTop');
            articleTitle.textContent = data.articles[i].title;
            mainArticle.appendChild(articleTitle);

            // Her henter jeg artiklens source fra API arrayet og appender denne i smallArticle
            let articleSource = document.createElement('div');
            articleSource.classList.add('mainArticleSource');
            articleSource.classList.add('sourceOnTop');
            articleSource.textContent = "-" + data.articles[i].source.name;
            mainArticle.appendChild(articleSource);

            // Her henter jeg url'en til artiklen fra API arrayet og appender denne i smallArticleSource
            let articleReadMore = document.createElement('a');
            articleReadMore.classList.add("smallArticleReadMoreButton");
            articleReadMore.classList.add("buttonOnTop");
            let readMoreText = document.createTextNode("Read more");
            articleReadMore.appendChild(readMoreText)
            articleReadMore.href = data.articles[i].url;
            articleSource.appendChild(articleReadMore);

        // Her sætter jeg den store artikel ind
        bigArticle.appendChild(mainArticle)
     }
}

getArticles();