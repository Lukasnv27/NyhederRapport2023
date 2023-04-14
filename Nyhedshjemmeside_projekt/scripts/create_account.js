function create_user(){
    var username_field = document.getElementById("username")
    var password_field = document.getElementById("password")
    var confirm_password_field = document.getElementById("confirmPassword")
    var email_field= document.getElementById("email")
    var username = username_field.value
    var password = password_field.value
    var confirmPassword = confirm_password_field.value
    var email = email_field.value

    if (username && password && confirmPassword && email) {
        if(password == confirmPassword){
            var all_user_data = get_user_data()
            //her tjekkes om all user date er null
            if(all_user_data == null){
                all_user_data = {}
            }
            all_user_data[username] = {
                password: password,
                email: email,
                favorite_articles: [],
                read_articles: [],
                favorite_category: ""
            }
            save_user_data(all_user_data)
        }else{
            alert("Kodeord er ikke ens")
        }
    } else {
        alert ("Udfyld felter")
    }
}