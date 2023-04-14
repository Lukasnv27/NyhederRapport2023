function editAccount() { //
    window.location.href = "profile.html"; // Redirects to profile.html
} 

function deleteAccount() { // Deletes the account
    localStorage.removeItem('users'); // Removes the user from localStorage
    alert('Your account has been deleted'); // Alerts the user that the account has been deleted
    window.location.href = "frontPage.html"; // Redirects to frontPage.html
}

function updateFavoriteNews() { // Updates the favorite news
    var favorite = document.getElementById('favorite'); // Gets the favorite news from the input field
    localStorage.setItem('favorite', JSON.stringify(favorite.value)); // Sets the favorite news in localStorage
    alert('Your favorite has been added'); // Alerts the user that the favorite news has been added
} 

// Ovenstående kode er til dels udarbejdet ved hjælp af GitHub Copilot
// https://www.w3schools.com/jsref/met_storage_clear.asp 
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
