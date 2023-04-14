// Her opretter jeg brugeren i local storage
function createProfile(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    const profileInfo = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    }
    window.localStorage.setItem('profileInfo', JSON.stringify(profileInfo)); // Jeg laver jeg en string, som kan læses i localStorage

    window.location.replace('profile.html') // Når burgeren er oprettet omdirigeres de til profile.html
}

// Her sletter jeg local storage når brugeren sletter sin profil
function deleteProfile () {
    if (confirm("Er du sikker på at du vil slette din profil?")) {
        localStorage.clear() // hvis ja, sletter den localStorage
        window.location.replace('index.html'); //Hvis ja, så bliver man redirected til login siden
    } else {
    }
}

// Her indsætter jeg burgerens oplysninger
// Fornavn
function showProfileInfoFirstName () {
    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo')); // Parser så jeg kan tage fat i elementer

    let firstnameInfo = document.getElementById('firstNameInfo')
    let profileInfoFirstName = document.getElementById('profileInfoFirstName');
    let firstNameWelcome = document.getElementById('firstNameTitle')

    firstnameInfo.innerHTML = profileInfoArr.firstName
    profileInfoFirstName.innerHTML = profileInfoArr.firstName;
    firstNameWelcome.innerHTML = profileInfoArr.firstName;
}
showProfileInfoFirstName()


// Efternavn
function showProfileInfoLastName () {
    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo'));
    let lastNameParagraph = document.getElementById('lastNameInfo');
    let profileInfoLastName = document.getElementById('profileInfoLastName');

    lastNameParagraph.innerHTML = profileInfoArr.lastName;
    profileInfoLastName.innerHTML = profileInfoArr.lastName;
}
showProfileInfoLastName()

// Brugernavn
function showProfileInfoUsername () {
    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo'));

    let usernameParagraph = document.getElementById('usernameInfo');
    usernameParagraph.innerHTML = profileInfoArr.username;
}
showProfileInfoUsername()


// Her lader jeg brugeren sætte sine yndlingskategorier PT 1
function addFavoriteCategory () {
    let category = document.getElementById('favoritesInput').value; // tager input

    const favoriteCategories = {
        category: category, // indsætter indput
    }

    window.localStorage.setItem('category', JSON.stringify(favoriteCategories)); // laver til en string
    window.location.reload() //siden reloader således at categorien kan vises på siden
}

// Her displayer jeg yndlingskategorien
function showFavCat () {
    var categoryArr = JSON.parse(window.localStorage.getItem('category'));

    let categoryList = document.createElement('li');
    categoryList.innerHTML = categoryArr.category;

    let element = document.getElementById('favoriteCategoryOne');
    element.appendChild(categoryList);
}
showFavCat()

// Her sletter jeg yndlingskategorien
function removeFavoriteCategory () {
    localStorage.removeItem('category') // tager fat i key 'category'
    window.location.reload() //siden reloader således at categorien slettes fra siden
}



// Her opdaterer jeg brugerens fornavn
function updateFirstName () {
    let newFirstName = document.getElementById('UpdateProfileInputFirstName').value; // tager unput

    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo')); // parser så jeg kan ændre

    profileInfoArr.firstName = newFirstName; // sæter firstname til input

    window.localStorage.setItem('profileInfo', JSON.stringify(profileInfoArr)); // laver string til localStorage

    window.location.reload() // reloader så de steder hvor nanvnet er displayet bliver opdateret
    alert("Fornavn er succesfuldt opdateret")
}

// Her opdaterer jeg brugerens efternavn
function updateLastname () {
    let newLastName = document.getElementById('UpdateProfileInputLastName').value;

    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo'));

    profileInfoArr.lastName = newLastName;

    window.localStorage.setItem('profileInfo', JSON.stringify(profileInfoArr));

    window.location.reload()
    alert("Efternavn er succesfuldt opdateret")
}

// Her opdaterer jeg brugerens brugernavn
function updateUsername () {
    let newUsername = document.getElementById('UpdateProfileInputUsername').value;

    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo'));

    profileInfoArr.username = newUsername;

    window.localStorage.setItem('profileInfo', JSON.stringify(profileInfoArr));

    window.location.reload()
    alert("Brugernavn er succesfuldt opdateret")
}

// Her opdaterer jeg brugerens adgangskode
function updatePassword () {
    let newPassword = document.getElementById('UpdateProfileInputPassword').value;

    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo'));

    profileInfoArr.password = newPassword;

    window.localStorage.setItem('profileInfo', JSON.stringify(profileInfoArr));

    window.location.reload()
    alert("Kode er succesfuldt opdateret")
}




// Her laver jeg mit log in
function logIn () {
    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo')); // parser så jeg kan læse
    var usernameField = document.getElementById('usernameLogin').value; // tager indtastet brugernavn
    var passwordField = document.getElementById('passwordLogin').value; // tager indtastet adgangskode
    var userUsername = profileInfoArr.username; // brugernavn fra localStorage
    var userPassword = profileInfoArr.password; // adgangskode fra localStorage

    if (usernameField === userUsername && passwordField === userPassword) { // Hvis brugernavn og adgangskode er ens med det som er i localStorage
        window.location.replace('homePage.html') // omdirigeret til homepage.html
    } else if (usernameField !== userUsername) { // viser fejl
        alert("Bruger ikke fundet")
    } else if (usernameField === userUsername && passwordField !== userPassword) { // viser fejl
        alert("Forkert adgangskode")
    } 
}

// Her laver jeg mit log Ud
function logOut () {
    if(confirm("Er du sikker på at du vil logge ud?")) {
        window.location.replace('index.html'); // omdirgerer til index.html
    } else {}
}