function createUser(){
    let usernameField = document.getElementById("createUsername")
    let passwordField = document.getElementById("createPassword")
    let confirmPasswordField = document.getElementById("confirmPassword")
    let emailField= document.getElementById("email")
    let username = usernameField.value
    let password = passwordField.value
    let confirmPassword = confirmPasswordField.value
    let email = emailField.value

    if (username && password && confirmPassword && email) {
        if(password == confirmPassword){
            console.log("test")
            let allUserData = getUserData()
            //her tjekkes om all user date er null
            if(allUserData == null){
                allUserData = {}
            }
            allUserData[username] = {
                password: password,
                email: email,
                favoriteArticles: [],
                readArticles: [],
                favoriteCategory: ""
            }
            saveUserData(allUserData)
        }else{
            alert("Kodeord er ikke ens")
        }
    }
}