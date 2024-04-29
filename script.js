let userCount = 0;
let userList = document.getElementById("user-list");

class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    userId() {
        let newId = (userArr.length).toString();
        return newId;
    }
}

function signUp() {
    let firstName = (document.getElementById("first-name-input")).value;
    let lastName = (document.getElementById("last-name-input")).value;
    let email = (document.getElementById("email-input")).value;
    let password = (document.getElementById("password-input")).value;

    let newUser = new User(firstName, lastName, email, password);
    userCount += 1;

    localStorage.setItem("user", JSON.stringify(newUser));

    console.log(newUser);

    userList.innerHTML = `<li>${newUser.firstName}, ${newUser.lastName}, ${newUser.email}, ${newUser.password}</li>`; 

    // displayData();

}

function displayData() {
    let listParse = "";
    listParse = JSON.parse(localStorage.getItem("user"));
    
    userList.innerHTML = `<li>${listParse.firstName}, ${listParse.lastName}, ${listParse.email}, ${listParse.password}</li>`; 
}