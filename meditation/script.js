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
    const nav_bar=document.querySelector('.nav-bar');
    nav_bar.style.display='block';
    const home=document.querySelector('.home');
    home.style.display='block';
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
document.addEventListener('DOMContentLoaded', () => {
  const musicLink = document.querySelectorAll('.nav-link')[1]; // Target the second nav link

  if (musicLink) {
    musicLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('.home').style.display = 'none'; // Hide the home content

      const musicContent = document.querySelector('.music'); // Select the music content
      if (musicContent) {
        musicContent.style.display = 'block'; // Show the music content
      } else {
        console.error('Music content not found.');
      }
    });
  } else {
    console.error('The second <a> element was not found.');
  }
});




  




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

