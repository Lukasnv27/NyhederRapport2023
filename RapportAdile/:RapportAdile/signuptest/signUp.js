var users = [] //laver et tomt array

function resultSignup() {
  event.preventDefault(); //siden ikke loader, når man indtaster oplysningerne
  var fname = document.getElementById("firstName1").value;
  var lname = document.getElementById("lastName1").value;
  var email = document.getElementById("email1").value;
  var pw = document.getElementById("password1").value;
  var test = document.getElementById("succes");


  var userData =  {
    firstName: fname,
    lastName: lname,
    email: email,
    password: pw,
  }

  var json = JSON.stringify(userData);

  localStorage.setItem(email, json);

  //styleing
  test.innerHTML = "User succesfully created";
  test.style.color = "rgb(0 128 0 / 61%)";
  test.style.textAlign = "center";
}

  //login
function checkLogin(){
  event.preventDefault();

  var a = document.getElementById("email4").value;
  var b = document.getElementById("password4").value;
  
  var user = localStorage.getItem(a);
  var data = JSON.parse(user);

  //if-else statement, stemmer det overens med localStorage
  if(user==null){
    console.log("Wrong email")
  } else if(a == data.email && b == data.password){ 
    window.location.href = "http://127.0.0.1:5500/index.html"
  } else {
    console.log("Wrong password")
  }
};

