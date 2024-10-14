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

function Signup(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = { username: name, mail: email, password: password };

    let storedData = localStorage.getItem("userdetails") || "[]";
    let arr = JSON.parse(storedData);

    let existingUser = arr.find(user => user.mail === email || user.username === name);
    if (!existingUser) {
        arr.push(data);
        localStorage.setItem("userdetails", JSON.stringify(arr));
        alert("Signup Successful");
        window.location.reload();
    } else {
        alert("User already exists");
    }
}

function Login(event) {
    event.preventDefault();
    const email1 = document.getElementById("email1").value;
    const password1 = document.getElementById("password1").value;

    let arr = JSON.parse(localStorage.getItem("userdetails")) || [];
    let existingUser = arr.find(user => user.mail === email1 && user.password === password1);

    if (existingUser) {
        alert("Login Successful");
        document.querySelector(".getstarted").style.display = "block";
        document.querySelector(".container").style.display = "none";
        document.getElementById("usernameDisplay").textContent = existingUser.username;
        startBreathingExercise();
    } else {
        alert("Invalid Email or Password");
    }
}

function Get_started(event) {
    event.preventDefault();
    document.querySelector(".getstarted").style.display = "none";
    document.querySelector(".choose_topic").style.display = "block";
}

// Breathing exercise function
function startBreathingExercise() {
    const circle = document.getElementById("breathingCircle");
    const inhaleText = document.getElementById("inhaleText");
    const exhaleText = document.getElementById("exhaleText");

    function breathe() {
        inhaleText.textContent = "Breathe In";
        exhaleText.textContent = "Breathe Out";
        
        circle.classList.add("breathe-in");
        setTimeout(() => {
            circle.classList.remove("breathe-in");
            circle.classList.add("breathe-out");
        }, 3000);
        
        setTimeout(() => {
            circle.classList.remove("breathe-out");
        }, 6000);

        setTimeout(breathe, 8000); // Repeat after the full cycle
    }

    breathe(); // Start the breathing exercise
}
