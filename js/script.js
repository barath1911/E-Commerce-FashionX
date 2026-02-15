const toggleButton = document.getElementById('modeToggle');
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

const viewAllBtn = document.getElementById("viewAllBtn");
const extraProducts = document.querySelectorAll(".extra-product");

let expanded = false;

viewAllBtn.addEventListener("click", function(e){
    e.preventDefault();

    extraProducts.forEach(card => {
        card.style.display = expanded ? "none" : "block";
    });

    viewAllBtn.innerHTML = expanded ? "View All ↗" : "Show Less ↗";

    expanded = !expanded;
});

extraProducts.forEach(card => {
    card.classList.toggle("show");
});

const hearts = document.querySelectorAll(".wishlist-icon i");

hearts.forEach(heart => {
  heart.addEventListener("click", function() {
    this.classList.toggle("fa-regular");
    this.classList.toggle("fa-solid");
    this.style.color = "#fd802e";
  });
});


const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const emailMessage = document.getElementById("emailMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        showMessage("Email is required!", "red");
        return;
    }

    if (!validateEmail(emailValue)) {
        showMessage("Please enter a valid email address!", "red");
        return;
    }

    showMessage("Subscribed successfully! 🎉", "green");
    emailInput.value = "";
});

function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}

function showMessage(message, color) {
    emailMessage.textContent = message;
    emailMessage.style.color = color;
}
