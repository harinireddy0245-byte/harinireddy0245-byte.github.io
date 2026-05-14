// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");

// Update the text content of the <h1>
myHeading.textContent = "ROYAL CHALLENGERS BENGALURU";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/RCB3.jpeg") {
    myImage.setAttribute("src", "images/RCB2.jpeg");
  } else {
    myImage.setAttribute("src", "images/RCB3.jpeg");
  }
});

let myButton = document.querySelector("button");

function setUserName() {
  let myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "RCB is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "RCB is cool, " + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
