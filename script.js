// ISSUES
// [ ] Data cannot be displayed because it's NOT being saved globally (is inside a function instead)

// Other global variables
const userDisplay = document.getElementById("user-display"); 

// Create an array
let users = [];
let tempArr = [];

// console.log(users);

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
    let firstName = document.getElementById("first-name-input");
    let lastName = document.getElementById("last-name-input");
    let email = document.getElementById("email-input");
    let password = document.getElementById("password-input");

    let user = new User(firstName.value, lastName.value, email.value, password.value);
    tempArr.push(user);
    saveData();
    console.log(tempArr);

    // Clear fields
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";

    // Destroy "User" object (make the user variable empty again)
    tempArr = "";
    
    // Get data
    // users = JSON.parse(localStorage.getItem("users"));
    
    // Display the data
    // let userDisplay = document.getElementById("user-display");
    // let userList = document.createElement("li");
    // let userList = document.createElement("li");

    // users.forEach(user => {
        // userDisplay.innerHTML += user.firstName + user.lastName + user.email + user.password;
        // userDisplay.append(userList);
    // });

    // for (let i = 0; i < users.length; i++) {
    //     // userDisplay.innerHTML = array[i];
    //     userList.innerHTML = `${users[i].firstName}, ${users[i].lastName}, ${users[i].email}, ${users[i].password}`;
    //     userDisplay.append(userList);
        
    // }
    // userDisplay.innerHTML = `${users[0].firstName}, ${users[0].lastName}, ${users[0].email}, ${users[0].password}`; 
    // userDisplay.innerHTML = users; 

    // userDisplay.append(userList.innerHTML);

    // console.log(users);
}

function saveData() {
    localStorage.setItem("users", JSON.stringify(tempArr));
}

function showData() {
    let userDisplay = document.getElementById("user-display");
    let userList = document.createElement("li");

    tempArr = JSON.parse(localStorage.getItem("users"));

    if(tempArr.length == 0) {
        userList = "";
    } else {
        for (let i = 0; i < tempArr.length; i++) {
            // userDisplay.innerHTML = array[i];
            userDisplay.innerHTML += `<li>${tempArr[i].firstName}, ${tempArr[i].lastName}, ${tempArr[i].email}, ${tempArr[i].password}</li>`;
            // userDisplay.append(userList);
        }
    }

    console.log(tempArr);
}

function deleteData() {
    localStorage.removeItem("users");
}

showData();

// Push the new object into the array

// checking if there's an existing user with the same email
// if(newUser.email === user.email)