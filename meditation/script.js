// tab function and tab active function //
function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((tab) => {
    tab.classList.remove("active");
  });

  const tablinks = document.querySelectorAll(".tablink");
  tablinks.forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Guest login functionality
function guestLogin() {
  alert('Logged in as Guest!');
  const contianer = document.querySelector(".container");
  contianer.style.display = "none";
  const front_body=document.querySelector('#front_body');
  front_body.style.display='block';
}

// data storage  signup //
function Signup(event) {
    event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let data = {username: name, mail: email, password: password};
  let storedData = localStorage.getItem("userdetails") || "[]";
  let arr = JSON.parse(storedData);
  let emails = arr.map((mail) => mail.mail);
  let names = arr.map((names) => names.name);
  let passwords = arr.map((passwords) => passwords.password);
  if (
    !emails.includes(email) &&
    !names.includes(name) &&
    !passwords.includes(password)
  ) {
    arr.push(data);
    localStorage.setItem("userdetails", JSON.stringify(arr));
    alert("Signup Successfull");
    window.location.href = "index.html";
  } else {
    alert("User already exists");
  }
}
//login data storage
function Login(event) {
  event.preventDefault();
  let email1 = document.getElementById("email1").value;
  let password1 = document.getElementById("password1").value;

  let arr = JSON.parse(localStorage.getItem("userdetails")) || [];
  let emails = arr.map((mail) => mail.mail);
  let passwords = arr.map((passwords) => passwords.password);

  if (emails.includes(email1) && passwords.includes(password1)) {
    alert("Login Successfull");
    const front_body=document.querySelector('#front_body');
    front_body.style.display='block';
    const contianer = document.querySelector(".container");
    contianer.style.display = "none";

  } else {
    alert("Invalid Email or Password");
  }
}
// finished data storage //

let preloadInterval;

preloadInterval = setInterval(() => {

  document.querySelector('.preload').classList.toggle('preload-finish');
}, 5000); 


setTimeout(() => {
  clearInterval(preloadInterval);
  document.querySelector('.preload').classList.add('preload-finish');
}, 15000); 


const navLink = document.querySelector('.nav-link');


if (navLink.length > 0) {
  navLink[0].addEventListener("click", (e) => {
    e.preventDefault();
    const frontBody = document.querySelector('.home');
    frontBody.style.display = 'block';
    const container = document.querySelector(".container");
    container.style.display = "none";
  });
}





// loader
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".mobile-nav-link");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fade .5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  menuBtn.classList.toggle("toggle");
});

// web active
const linkColor = document.querySelectorAll(".nav-link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

//tablet-active

const mobileLink = document.querySelectorAll(".mobile-nav-link");
function colorMobileLink() {
  mobileLink.forEach((l) => l.classList.remove("mobile-active"));
  this.classList.add("mobile-active");
}
mobileLink.forEach((l) => l.addEventListener("click", colorMobileLink));

//  mobile/small sz active
const BmobileLink = document.querySelectorAll(".mobile-b-icon");
function activeLink() {
  BmobileLink.forEach((l) => l.classList.remove("mobile-b-active"));
  this.classList.add("mobile-b-active");
}
BmobileLink.forEach((l) => l.addEventListener("click", activeLink));

const greeting = document.getElementById("greeting");

function setGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {

    greeting.textContent = "Good afternoon, ";
  } else {
  
    greeting.textContent = "Good evening, ";
  }
}
setGreeting();


const name = document.getElementById("name");

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = " [Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// setnname

function setName(e) {
  if (e.type === "keypress") {
   
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
getName();

// Reminder

const text = [
  "You matter.",
  "You're awesome!",
  "You did great today!",
  "I believe in you!",
  "You are loved!",
  "You are worthy",
  "Keep going!",
  "I love you!",
  "Make it happen.",
  "Be a light.",
  "Know your worth.",
  "Things will get better",
  "Be good. Do good.",
  "Follow your heart.",
  "Stay hopeful!",
  "You are strong!",
  "Protect your peace.",
  "Be still.",
  "You are beautiful!",
  "Keep on fighting!",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 5000);
})();

// accordion

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accordion-button-active");
  });
});

// modal home
const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const close = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-active");
});
close.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});
