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

