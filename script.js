// ISSUES
// [ ] Data cannot be displayed because it's NOT being saved globally (is inside a function instead)

// Other global variables
const userDisplay = document.getElementById("user-display"); 

// Create an array
let users = [];

console.log(users);

// Create a constructor
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    // userId() {
    //     let newId = (userArr.length).toString();
    //     return newId;
    // }
}

// Create a new object and push it into the array
function signUp() {
    let firstName = document.getElementById("first-name-input").value;
    let lastName = document.getElementById("last-name-input").value;
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;

    let user = new User(firstName, lastName, email, password);
    users.push(user);

    // Clear input box
    firstName = "";
    lastName = "";
    email = "";
    password = "";

    // Save data
    localStorage.setItem("users", JSON.stringify(users));

    // Destroy "User" object (make the user variable empty again)
    user = "";
    
    // Get the data
    let userTemp = JSON.parse(localStorage.getItem("users"));
    
    // Display the data
    let userList = document.createElement("li");

    // userList.innerHTML = `<li>${newUser.firstName}, ${newUser.lastName}, ${newUser.email}, ${newUser.password}</li>`; 
}

// Push the new object into the array

// checking if there's an existing user with the same email
// if(newUser.email === user.email)