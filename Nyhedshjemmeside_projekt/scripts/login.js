function validate_login (){
    //henter værdig fra id'er
    var username_field = document.getElementById("username")
    var password_field = document.getElementById("password")
    var username = username_field.value
    var password = password_field.value
    //kigger om username og password er tomme
    if (username && password) {
        var all_user_data = get_user_data()
        var user_data = all_user_data[username]
        if(user_data){
            //user findes i json database
            var user_password = user_data.password //jeg kan benytter "." da vi kender key
            if(user_password == password){
                //successfully logged in
                set_current_user (username) //brugernavn funktion køres da vi gerne vil vises brugernavnet i øverste højre hjørne når man er logget ind
                window.location.href = "index.html";
            }else{
                //password forkert
                alert("Forkert kodeord")
            }
        } else {
            //user kan ikke findes i json database
            alert("Brugernavn ikke fundet")
        }
    }else {
        alert ("Udfyld felter")
    }
}








