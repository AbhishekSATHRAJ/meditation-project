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

// data storage  signup //
function Signup(event) {
    event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let data = {username: name, mail: email, password: password};
  // Check if userdetails already exists in local storage
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

    const audio1 = new Audio(
      "./assets/audio/WhatsApp Audio 2024-10-07 at 22.09.39_8ee27a3d.mp3"
    );
    audio1.play();
  } else {
    alert("Invalid Email or Password");
  }
}
// finished data storage //

let preloadInterval;
// Start the preloader animation
preloadInterval = setInterval(() => {
  // Toggle the preloader animation classes
  document.querySelector('.preload').classList.toggle('preload-finish');
}, 5000); // 5000ms = 5 seconds

// Stop the preloader animation after a certain time
setTimeout(() => {
  clearInterval(preloadInterval);
  document.querySelector('.preload').classList.add('preload-finish');
}, 15000); // 15000ms = 15 seconds

// home
// Select elements with class 'nav-link'
const navLink = document.querySelector('.nav-link');

// Check if navLink is not empty
if (navLink.length > 0) {
  // Add event listener to the first element
  navLink[0].addEventListener("click", (e) => {
    e.preventDefault();
    const frontBody = document.querySelector('.home');
    frontBody.style.display = 'block';
    const container = document.querySelector(".container");
    container.style.display = "none";
  });
}