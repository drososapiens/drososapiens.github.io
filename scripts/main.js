// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
//
// let myVariable;
//

// function multiply(num1,num2) {
//   let result = num1 * num2;
//   return result;
// }
// This function take two numbers as arguments and multiply them

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }
//
// //  simila to ... but shorter
// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {};

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/white1118.jpg') {
      myImage.setAttribute ('src','images/image2.jpg');
    } else {
      myImage.setAttribute ('src','images/white1118.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
