function validateLogin (){
    //henter værdig fra id'er
    let usernameField = document.getElementById("username")
    let passwordField = document.getElementById("password")
    let username = usernameField.value
    var password = passwordField.value
    //kigger om username og password er tomme
    if (username && password) {
        let allUserData = getUserData()
        let userData = allUserData[username]
        if(userData){
            //user findes i json database
            let userPassword = userData.password //jeg kan benytter "." da vi kender key
            if(userPassword == password){
                //successfully logged in
                setCurrentUser(username) //brugernavn funktion køres da vi gerne vil vises brugernavnet i øverste højre hjørne når man er logget ind
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








