// Color Toggle
const colorButton = document.getElementById("colorButton");
let isBlue = false;
colorButton.onclick = function() {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Font Size Slider
const fontSizeSlider = document.getElementById("fontSizeSlider");
const myParagraph = document.getElementById("myParagraph");
fontSizeSlider.oninput = function() {
  myParagraph.style.fontSize = this.value + "px";
};

// Modal
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");

openModalBtn.onclick = function() {
  modal.style.display = "block";
};

closeModalBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Form Validation
const form = document.getElementById("myForm");
form.onsubmit = function(event) {
  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value;
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }


  // Password validation
  const password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // At least one uppercase, one number, 8+ chars
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters, contain at least one uppercase letter and one number.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission
  }
  return isValid;
};

    // Dropdown
    const select = document.getElementById('mySelect');
    const messageSpan = document.getElementById('selectMessage');

    select.onchange = function() {
      const selectedValue = this.value;
      let message = "";

      switch (selectedValue) {
        case "1": message = "You selected Option 1!"; break;
        case "2": message = "Option 2 is your choice!"; break;
        case "3": message = "Option 3 was chosen!"; break;
        default: message = "Please make a selection";
      }

      messageSpan.textContent = message;
    };