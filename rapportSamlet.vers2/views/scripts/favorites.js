function saveUserFavoriteCategory() {
  let chosenCategory = findCheckedRadioButtonIdValue();
  if (chosenCategory) {
    //vi ved at der er en kategori valgt
    let username = getCurrentUser();
    if (username) {
      //username fundet
      let allUserData = getUserData();
      allUserData[username].favoriteCategory = chosenCategory; //favorite_category opdateres i localstorage
      saveUserData(allUserData);
    } else {
      alert("Brugernavn ikke fundet");
    }
  } else {
    alert("Vælge en kategori");
  }
}

function showFavoriteCategory() {
  let favoriteCategory = getFavoriteCategory();
  if (favoriteCategory) {
    let uploadChosenCategory = document.getElementById(favoriteCategory);
    uploadChosenCategory.checked = true; // Hvis id matcher favorite kategori
  }
}

function findCheckedRadioButtonIdValue() {
  let radios = document.getElementsByName("favoriteCategory");
  for (let i = 0; i < radios.length; i++) {
    let radio = radios[i];
    if (radio.checked) {
      return radio.id;
    }
  }
  return null;
}
//https://linuxhint.com/check-radio-button-selected-javascript/

function addToFavorites(i) {
  //henter element med artikel url
  let articleUrlElement = document.getElementById("urlUpload" + i);
  let url = articleUrlElement.href;
  //henter alt userdata
  let allUserData = getUserData();
  //henter current user data
  let currentUser = getCurrentUser();
  //tilføjer url til current user's object i local user data
  //tjekker om url er tilstede i et array
  if (allUserData[currentUser].favoriteArticles.indexOf(url) === -1) {
    //hvis det ikke eksistere
    allUserData[currentUser].favoriteArticles.push(url);
    //gem user data
    saveUserData(allUserData);
    //favorit button billede opdateres
    const favoriteButton = document.querySelector("#favoriteButton" + i);
    favorite_button.classList.remove("fa-regular");
    favorite_button.classList.add("fa-solid");
  }
}

function getFavoriteArticles() {
  let allUserData = getUserData();
  let currentUser = getCurrentUser();
  let favoriteArticles = allUserData[currentUser].favoriteArticles; //Henter favorit artikler under current user
  return favoriteArticles;
}
//jeg benytter appendchild da vi ikke ved hvor mange element der er
function uploadFavoriteArticles() {
  let favoriteArticles = getFavoriteArticles();

  for (let i = 0; i < favoriteArticles.length; i++) {
    let listItemElement = document.createElement("li");
    let linkElement = document.createElement("a");

    linkElement.href = favoriteArticles[i];
    linkElement.innerText = favoriteArticles[i];

    listItemElement.appendChild(linkElement);

    let list = document.getElementById("favoriteArticles");
    list.appendChild(listItemElement);
  }
}
