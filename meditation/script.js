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
    const getstartedpage = document.querySelector(".getstarted");
    getstartedpage.style.display = "block";
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
// Update the username display
function user_name() {
  let name = document.getElementById("name").value;
  let arr = JSON.parse(localStorage.getItem("userdetails")) || [];
  let user_name = arr.map((user) => user.name);
  if (user_name.includes(name)) {
    document.getElementById("usernameDisplay").innerHTML = `${name}`;
  } else {
    document.getElementById("usernameDisplay").innerHTML = "";
  }
}
// get started function //
function Get_started(event){
    event.preventDefault();
    const getstartedpage = document.querySelector(".getstarted");
    getstartedpage.style.display = "none";
    const choose_topic=document.querySelector('.choose_topic');
    choose_topic.style.display="block";

}

// What time function

const meditationTimeInput = document.getElementById('meditation-time');
const timeDisplay = document.getElementById('time-display');
const saveTimeButton = document.getElementById('save-time');

meditationTimeInput.addEventListener('change', (e) => {
    const selectedTime = meditationTimeInput.value;
    const formattedTime = moment(selectedTime, 'HH:mm:ss').format('h:mm:ss A');
    timeDisplay.textContent = formattedTime;
});

saveTimeButton.addEventListener('click', (e) => {
    const selectedTime = meditationTimeInput.value;
    const formattedTime = moment(selectedTime, 'HH:mm:ss').format('h:mm:ss A');
    localStorage.setItem('meditationTime', formattedTime);
    alert('Time saved!');
});


const topic1=document.querySelector('.topic1');
topic1.addEventListener("click",(event)=>{
 const choose_topic=document.querySelector('.choose_topic');
 choose_topic.style.display="none";
 const what_time=document.querySelector('.what_time');
 what_time.style.display="block";
 






})
