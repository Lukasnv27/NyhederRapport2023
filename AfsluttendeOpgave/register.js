// Create an object to store multiple users
var users = {};

function store(){
    // Get the input field values
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var favorite = document.getElementById('favorite');

    // Add the user information to the users object
    users[name.value] = {
        password: pw.value,
        favorite: favorite.value
    };

    // Convert the users object to a JSON string and save it to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Your account has been created');

    console.log(name.value)
    console.log(pw.value)
}

//checking
function check(){
    // Get the stored users object from localStorage
    var storedUsers = JSON.parse(localStorage.getItem('users'));

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // Check if the user exists in the storedUsers object and if the password matches
    if(storedUsers[userName.value] && storedUsers[userName.value].password == userPw.value){
        alert('You are logged in.');
        window.location.href = "frontPage.html";
    }else{
        alert('Error on login');
    }
}

// Ovenstående er til dels lavet ved brug af: https://www.w3schools.com/howto/howto_css_login_form.asp
// Og udarbejdet ved hjælp af GitHub Copilot
// https://www.w3schools.com/jsref/prop_win_localstorage.asp