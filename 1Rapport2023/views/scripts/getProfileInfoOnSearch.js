// Her indsætter jeg navn på search Siden
function getUserInfoSearch (){
    var profileInfoArr = JSON.parse(window.localStorage.getItem('profileInfo')); //Jeg parser profileInfo så jeg kan rette i den

    let infoFirstNameParagraph = document.createElement('p');
    infoFirstNameParagraph.innerHTML = profileInfoArr.firstName;
    
    let infoLastNameParagraph = document.createElement('p');
    infoLastNameParagraph.innerHTML = profileInfoArr.lastName;

    let firstNameElement = document.getElementById('profileInfoFirstNameSearch');
    firstNameElement.appendChild(infoFirstNameParagraph);

    let lastNameElement = document.getElementById('profileInfoLastNameSearch');
    lastNameElement.appendChild(infoLastNameParagraph)
}
getUserInfoSearch()