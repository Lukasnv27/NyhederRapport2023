// Her indsætter jeg brugerens navn på favorritsiden
function getUserInfoFavorites (){
    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo')); //Jeg parser profileInfo så jeg kan rette i den

    let infoFirstNameParagraph = document.createElement('p');
    infoFirstNameParagraph.innerHTML = profileInfoArr.firstName;
    
    let infoLastNameParagraph = document.createElement('p');
    infoLastNameParagraph.innerHTML = profileInfoArr.lastName;

    let firstNameElement = document.getElementById('profileInfoFirstNameF');
    firstNameElement.appendChild(infoFirstNameParagraph);

    let lastNameElement = document.getElementById('profileInfoLastNameF');
    lastNameElement.appendChild(infoLastNameParagraph)
}
getUserInfoFavorites()