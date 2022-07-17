var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPass = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPass = document.getElementById('signinPassword')
var error = document.getElementById('error')
var usernameList;


if (localStorage.getItem("USERdata") == null) {
    usernameList = [];
} else {
    usernameList = JSON.parse(localStorage.getItem("USERdata"));
}

function signUp(){
    if (signupEmail.value =="" ||  signupName.value == ""  ||  signupPass.value == "")
        error.innerHTML="All inputs is required";
    else{
        var addUser = {
            Name : signupName.value,
            Email : signupEmail.value,
            Password : signupPass.value,
        };
        console.log(addUser);

        var user_data_str = JSON.stringify(addUser);
    
        var userExists = usernameList.find(user => JSON.stringify(user) === user_data_str);
        if (userExists) {
            return alert("User already Exists");
        }
        else{
        usernameList.push(addUser);
        /***** */
        localStorage.setItem("USERdata", JSON.stringify(usernameList));
        clearForm();
        var succes = document.getElementById("suc");
        succes.innerHTML="succes";
        }
     }  
     
}




function login(){
    if (signinEmail.value =="" ||  signinPass.value == "")
        error.innerHTML="All inputs is required";
    else{
    var password = signinPassword.value;
    var email = signinEmail.value;
    for (var i = 0; i < usernameList.length; i++) {
        if (usernameList[i].Email.toLowerCase() == email.toLowerCase() && usernameList[i].Password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername',JSON.stringify( usernameList[i].name));
            welcomePage();
        }
        else{
        console.log('mesmagoood');
        error.innerHTML = "user not exist"
        }


    }
    }
  }


function welcomePage(){
    var hrefwelc = document.querySelector(".welchref");
    hrefwelc.href="page.html";
}

// var username = JSON.parse(localStorage.getItem('sessionUsername'));
// if (username) {
//     document.getElementById('username').innerHTML = "Welcome " + username
// }

function clearForm() {
    signupName.value = "";
    signupEmail.value = "";
    signupPass.value = "";
  }