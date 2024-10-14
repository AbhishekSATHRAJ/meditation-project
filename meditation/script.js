// Tab function and tab active function
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

// Data storage - Signup
function Signup(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let data = { username: name, mail: email, password: password };

  // Check if user details already exist in local storage
  let storedData = localStorage.getItem("userdetails") || "[]";
  let arr = JSON.parse(storedData);

  // Check if email, name, or password already exist
  let existingUser  = arr.find((user) => user.mail === email || user.username === name || user.password === password);

  if (!existingUser ) {
    arr.push(data);
    localStorage.setItem("userdetails", JSON.stringify(arr));
    alert("Signup Successful");
    window.location.href = "index.html";
  } else {
    alert("User  already exists");
  }
}

// Login data storage
function Login(event) {
  event.preventDefault();
  let email1 = document.getElementById("email1").value;
  let password1 = document.getElementById("password1").value;

  let arr = JSON.parse(localStorage.getItem("userdetails")) || [];

  // Check if email and password match
  let existingUser  = arr.find((user) => user.mail === email1 && user.password === password1);

  if (existingUser ) {
    alert("Login Successful");
    const getstartedpage = document.querySelector(".getstarted");
    getstartedpage.style.display = "block";
    const container = document.querySelector(".container");
    container.style.display = "none";

    const audio1 = new Audio("./assets/audio/WhatsApp Audio 2024-10-07 at 22.09.39_8ee27a3d.mp3");
    audio1.play();
  } else {
    alert("Invalid Email or Password");
  }
}

// Update the username display
function user_name() {
  let name = document.getElementById("name").value;
  let arr = JSON.parse(localStorage.getItem("userdetails")) || [];
  let user_name = arr.map((user) => user.username);

  if (user_name.includes(name)) {
    document.getElementById("usernameDisplay").innerHTML = `${name}`;
  } else {
    document.getElementById("usernameDisplay").innerHTML = "";
  }
}

// Get started function
function Get_started(event) {
  event.preventDefault();
  const getstartedpage = document.querySelector(".getstarted");
  getstartedpage.style.display = "none";
  const choose_topic = document.querySelector(".choose_topic");
  choose_topic.style.display = "block";
}

// What time function
const meditationTimeInput = document.getElementById("meditation-time");
const timeDisplay = document.getElementById("time-display");
const saveTimeButton = document.getElementById("save-time");

meditationTimeInput.addEventListener("change", (e) => {
  const selectedTime = meditationTimeInput.value;
  const formattedTime = moment(selectedTime, "HH:mm:ss").format("h:mm:ss A");
  timeDisplay.textContent = formattedTime;
});

saveTimeButton.addEventListener("click", (e) => {
  const selectedTime = meditationTimeInput.value;
  const formattedTime = moment(selectedTime, "HH:mm:ss").format("h:mm:ss A");
  localStorage.setItem("meditationTime", formattedTime);
  alert("Time saved!");
});

// Choose topic function and what time
const topics = document.querySelectorAll(
  "#topic1,#topic2,#topic3,#topic4,#topic5,#topic6,#topic7,#topic8,#topic9,#topic10,#topic11,#topic12,#topic13,#topic14,#topic15,#topic16,#topic17,#topic18"
);

topics.forEach((topic) => {
  topic.addEventListener("click", (event) => {
    const choose_topic = document.querySelector(".choose_topic");
    choose_topic.style.display = "none";
    const what_time = document.querySelector(".what_time");
    what_time.style.display = "block";
  });
});

// Function to handle the click event for the navigation bar
function handleNavClick(event) {
  const target = event.target;
  const sectionId = target.getAttribute("href").replace("#", "");
  const section = document.getElementById(sectionId);
  section.style.display = "block";
}

// Add event listener to the navigation bar
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", handleNavClick);
});

// Function to