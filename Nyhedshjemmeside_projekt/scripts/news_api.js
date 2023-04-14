
    const getNews = async () => { 
        var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a6d41776d874aebb922967d2ec6e56d"
        var category = get_favorite_category()
        if(category == null){
            category = "general"
        }
// I dette eksempel benyttes await til at vente på at fetch metoden har returneret et svar og json
//metoden har parsed indholdet til et JavaScript objekt, inden videre kodeudførelse fortsætter.
// Dette sikrer at der ikke forsøges at benytte data fra en asynkron operation, før den er færdig.
        let response = await fetch(url+"&category="+category,
            {
                method: 'GET',
            }
        );
            const news = await response.json();
            console.log(news)

            var favorite_articles = get_favorite_articles ()

//Jeg benytter her et for loop som loops igen indtil i<7 hvilket betyder 7 gange. 
            for(var i = 0; i<7; i++){
//Her bestemmes der hvad jeg vil hente i mit api arkiv altså billedernes url
                var url_to_img = news.articles[i].urlToImage
//Nu bestemmer jeg hvilke steder billederne skal indsættes i min HTML. Jeg kan benytte 
//"picture_upload_"+i da jeg har nummerede mine img id'er med en endelse fra 0-6
                var picture_upload = document.getElementById("picture_upload_"+i)
//Jeg sætter nu picture_upload.src lig med urt_to_img hvilket fortæller at jeg gerne vil have url'en på image ind på picture_uploads plads
                picture_upload.src = url_to_img
//Jeg bestemmer her hvad jeg gerne vil hente i min API, denne gange er det artiklens forfatter
                var author_article = news.articles[i].author;
//Der bestemmes nu hvor jeg gerne vil indsætte mit array i min html code
                var author_upload = document.getElementById("author_upload_"+i);
//Artiklens forfatter sættes in på innertext i mine author_upload div'er
                author_upload.innerText = author_article;
//Samme fremgangsmåde som ovenståede benytter til at indsætte title på artiklen ind i på min nyhedshjemmeside
                var title_article_api = news.articles[i].title;
                var title_upload = document.getElementById("title_upload_"+i);
                title_upload.innerText = title_article_api;  

                var url_to_article = news.articles[i].url
                var url_upload = document.getElementById("url_upload_"+i)
                url_upload.href= url_to_article

                if (favorite_articles.indexOf(url_to_article) != -1){
                    //article is in user's favorites
                    const favorite_button = document.querySelector("#favorite_button_" +i);
                    favorite_button.classList.remove('fa-regular');
                    favorite_button.classList.add('fa-solid')
                }
            } 
        
    };

async function search_news (){
    var search_box = document.getElementById("search_box") // skal hente data fra dette id
    var select_dropdown = document.getElementById("langages_dropdown") // skal hente data fra dette id
    var url = "https://newsapi.org/v2/everything?apiKey=3a6d41776d874aebb922967d2ec6e56d"+"&q="+ encodeURIComponent(search_box.value)+ "&language="+ select_dropdown.value 
    let response = await fetch(url,
    {
        method: 'GET',
    }
    );
    const news = await response.json();
    console.log(news)
//Jeg benytter her et for loop som loops igen indtil i<7 hvilket betyder 7 gange. 
    for(var i = 0; i<7; i++){
//Her bestemmes der hvad jeg vil hente i mit api arkiv altså billedernes url
        var url_to_img = news.articles[i].urlToImage
//Nu bestemmer jeg hvilke steder billederne skal indsættes i min HTML. Jeg kan benytte 
//"picture_upload_"+i da jeg har nummerede mine img id'er med en endelse fra 0-6
        var picture_upload = document.getElementById("picture_upload_"+i)
//Jeg sætter nu picture_upload.src lig med urt_to_img hvilket fortæller at jeg gerne vil have url'en på image ind på picture_uploads plads
        picture_upload.src = url_to_img
//Jeg bestemmer her hvad jeg gerne vil hente i min API, denne gange er det artiklens forfatter
        var author_article = news.articles[i].author;
//Der bestemmes nu hvor jeg gerne vil indsætte mit array i min html code
        var author_upload = document.getElementById("author_upload_"+i);
//Artiklens forfatter sættes in på innertext i mine author_upload div'er
        author_upload.innerText = author_article;
//Samme fremgangsmåde som ovenståede benytter til at indsætte title på artiklen ind i på min nyhedshjemmeside
        var title_article_api = news.articles[i].title;
        var title_upload = document.getElementById("title_upload_"+i);
        title_upload.innerText = title_article_api;  

        var url_to_article = news.articles[i].url
        var url_upload = document.getElementById("url_upload_"+i)
        url_upload.href= url_to_article
    } 
} 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent


