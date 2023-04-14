function save_user_favorite_category() {
    var chosen_category = find_checked_radio_button_id_value()
    if(chosen_category){
        //vi ved at der er en kategori valgt
        var username = get_current_user()
        if(username){
            //username fundet
            var all_user_data = get_user_data()
            all_user_data[username].favorite_category = chosen_category //favorite_category opdateres i localstorage
            save_user_data(all_user_data)
        } else {
            alert("Brugernavn ikke fundet")//username ikke fundet
        }
    }else{
        alert ("Vælge en kategori")
    }
}

function show_favorite_category(){
    var favorite_category = get_favorite_category()
    if(favorite_category){
        var upload_chosen_category = document.getElementById(favorite_category)
        upload_chosen_category.checked = true // Hvis id matcher favorite kategori 
    }
}

function find_checked_radio_button_id_value() {
    var radios = document.getElementsByName("favorite_category");
    for (let i = 0; i < radios.length; i++) {
        var radio = radios[i]
        if (radio.checked) {
            return radio.id
        }
    }
    return null
}
//https://linuxhint.com/check-radio-button-selected-javascript/

function add_to_favorites (i){
    //henter element med artikel url
    var article_url_element = document.getElementById('url_upload_' + i);
    var url = article_url_element.href
    //henter alt userdata
    var all_user_data = get_user_data()
    //henter current user data 
    var current_user = get_current_user()
    //tilføjer url til current user's object i local user data 
    //tjekker om url er tilstede i et array 
    if (all_user_data[current_user].favorite_articles.indexOf(url) === -1) {
        //hvis det ikke eksistere
        all_user_data[current_user].favorite_articles.push(url);
        //gem user data
        save_user_data(all_user_data)
        //favorit button billede opdateres
        const favorite_button = document.querySelector("#favorite_button_" + i);
        favorite_button.classList.remove('fa-regular');
        favorite_button.classList.add('fa-solid')
    }
}


function get_favorite_articles (){
    var all_user_data = get_user_data()
    var current_user = get_current_user()
    var favorite_articles = all_user_data[current_user].favorite_articles //Henter favorit artikler under current user
    return favorite_articles
}
//jeg benytter appendchild da vi ikke ved hvor mange element der er 
function upload_favorite_articles (){
    var favorite_articles = get_favorite_articles()
    
    for (let i=0; i<favorite_articles.length; i++){

        var list_item_element = document.createElement("li")
        var link_element = document.createElement("a")

        link_element.href= favorite_articles[i]
        link_element.innerText = favorite_articles[i]

        list_item_element.appendChild(link_element)

        var list = document.getElementById("favorite_articles")
        list.appendChild(list_item_element)
    }
}



