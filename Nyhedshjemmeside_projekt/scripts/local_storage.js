const all_user_data_key = "all_users"
//Denne funktion returner alt data under key variable i json format
function get_user_data (){
//Her opretter jeg en variable som henter alt data som ligger under key i clients lokalstorage
    var string_data = localStorage.getItem(all_user_data_key)
// jeg vil gerne convertere min variable sting_data til json format
    var parse_data = JSON.parse(string_data)
    return parse_data
}
function save_user_data(data){
//Jeg konvertere min json data til en string 
    var string_data = JSON.stringify(data)
//Her går setItem ind og kigger i localstorage, hvis der er data under key sætter den værdien til at være string_data
    localStorage.setItem(all_user_data_key, string_data)
}
const current_user_data_key = "current_user"
function set_current_user (user){
    var current_user_object = {username: user}
    var string_current_user = JSON.stringify(current_user_object)
    localStorage.setItem(current_user_data_key,string_current_user)
}
function get_current_user (){
    var string_current_user = localStorage.getItem(current_user_data_key) // localstorage data i string
    var parse_current_user = JSON.parse(string_current_user) // parse den string
    var username = parse_current_user.username // pille ud brugernavn
    return username // return brugernavn som en string
}
function upload_username(){
    var username = get_current_user()
    if(username){
        var upload_username_to_website = document.getElementById("username_logged_in")
        upload_username_to_website.innerText = "Hi, "+ username
    }else{
        window.location.href = "login_index.html"
    }
}
function log_out(){
    localStorage.removeItem(current_user_data_key)
    window.location.href = "login_index.html"
}

function get_favorite_category(){
    var username = get_current_user()
    if(username){
        //username fundet
        var all_user_data = get_user_data()
        var chosen_category = all_user_data[username].favorite_category 
        return chosen_category
    }else{
        return null
    }
}

