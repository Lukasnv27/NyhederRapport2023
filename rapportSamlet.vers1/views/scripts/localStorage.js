const allUserDataKey = "allUsers"
//Denne funktion returner alt data under key letiable i json format

function getUserData (){
//Her opretter jeg en letiable som henter alt data som ligger under key i clients lokalstorage
    let stringData = localStorage.getItem(allUserDataKey)
// jeg vil gerne convertere min letiable sting_data til json format
    let parseData = JSON.parse(stringData)
    return parseData
}
function saveUserData(data){
//Jeg konvertere min json data til en string 
    let stringData = JSON.stringify(data)
//Her går setItem ind og kigger i localstorage, hvis der er data under key sætter den værdien til at være string_data
    localStorage.setItem(allUserDataKey, stringData)
}
const currentUserDataKey = "currentUser"

function setCurrentUser (user){
    let currentUserObject = {username: user}
    let stringCurrentUser = JSON.stringify(currentUserObject)
    localStorage.setItem(currentUserDataKey,stringCurrentUser)
}
function getCurrentUser (){
    let stringCurrentUser = localStorage.getItem(currentUserDataKey) // localstorage data i string
    let parseCurrentUser = JSON.parse(stringCurrentUser) // parse den string
    let username = parseCurrentUser.username // pille ud brugernavn
    return username // return brugernavn som en string
}
function uploadUsername(){
    let username = getCurrentUser()
    if(username){
        let uploadUsernameToWebsite = document.getElementById("usernameLoggedIn")
        uploadUsernameToWebsite.innerText = "Hi, "+ username;

        let profilePhoto = document.getElementById("profilePhoto")
        profilePhoto.src = "http://cdn.onlinewebfonts.com/svg/img_569204.png"
    }else{
        window.location.href = "loginIndex.html"
    }
}
function logOut(){
    localStorage.removeItem(currentUserDataKey)
    window.location.href = "login.html"
}

function getFavoriteCategory(){
    let username = getCurrentUser()
    if(username){
        //username fundet
        let allUserData = getUserData()
        let chosenCategory = allUserData[username].favoriteCategory 
        return chosenCategory
    }else{
        return null
    }
}

