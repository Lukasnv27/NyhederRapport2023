// Her indsætter jeg brugerens navn på homePage
function getUserInfoHomePage (){
    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo')); //Jeg parser profileInfo så jeg kan rette i den

    let infoFirstNameParagraph = document.createElement('p'); // Opretter p-element
    infoFirstNameParagraph.innerHTML = profileInfoArr.firstName; // indsætter fornavn i p-elementet
    
    let infoLastNameParagraph = document.createElement('p'); // opretter p-element
    infoLastNameParagraph.innerHTML = profileInfoArr.lastName; // indsætter efternavnet i p-elementet

    let firstNameElement = document.getElementById('frontPageProfileInfoFirstName');
    firstNameElement.appendChild(infoFirstNameParagraph); // indsætter fornavnet i den rigtige div

    let lastNameElement = document.getElementById('FrontPageProfileInfoLastName');
    lastNameElement.appendChild(infoLastNameParagraph) // indsætter efternavnet i den rigtige div
}
getUserInfoHomePage()


