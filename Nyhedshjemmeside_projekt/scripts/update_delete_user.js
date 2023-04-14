function change_password(){
    var current_password_field = document.getElementById("current_password")
    var new_password_field = document.getElementById("new_password")
    var confirm_new_password_field = document.getElementById("confirm_new_password")
    var current_password = current_password_field.value
    var new_password = new_password_field.value
    var confirm_new_password = confirm_new_password_field.value
    
    if (current_password && new_password && confirm_new_password) {
        var username = get_current_user()
        if(username){
            //username found
            var all_user_data = get_user_data()
            var password = all_user_data[username].password
            if(current_password == password){
                //current password is correct
                if(new_password == confirm_new_password){
                    all_user_data[username].password = new_password // Her opdatere vi kodeordet i vores dataset
                    save_user_data(all_user_data) // her gemmer vi det nye dataset i local storage
                    alert("Kodeord er opdateret!")
                }else{
                    alert("Nye kodeord er ikke ens")
                }
            }else{
                alert("Det nuværende kodeord er ikke rigtigt ")
            }
        } else {
            alert("Brugernavn ikke fundet")//username not found
        }
    }else {
        alert ("Udfyld felter")
    }
}

function delete_user(){
    var current_password_field = document.getElementById("current_password")
    var current_password = current_password_field.value

    if(current_password){
        var username = get_current_user()
        if(username){
            //current user is found in local storage
            var all_user_data = get_user_data()
            var password = all_user_data[username].password
            if(current_password == password){
                let user_response = confirm("Er du sikker?")
                if(user_response == true){
                    delete all_user_data[username]
                    save_user_data(all_user_data)
                    localStorage.removeItem(current_user_data_key)
                    window.location.href = "create_account_index.html"
                }
            } else {
                alert("Kodeord er ikke rigtigt ")
            }
        } else {
            //current user not found, cannot delete
        }
    }else{
        alert ("Udfyld nuværende kodeord felt")
    }
}