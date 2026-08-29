// ==========================================
// WANDERLY - FINAL JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. NAVIGATION
  // ==========================================

  const navLinks = document.querySelectorAll(".F4 a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const text = link.textContent.trim().toLowerCase();

      if (text === "home") {
        const section = document.querySelector(".First");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else if (text === "about") {
        const section = document.querySelector(".Third");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else if (text === "explore") {
        const section = document.querySelector(".Fourth");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else if (text === "contact") {
        const section = document.querySelector(".Six");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ==========================================
  // 2. EXPLORE NOW BUTTON
  // ==========================================

  const exploreBtn = document.querySelector(".B1");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      const exploreSection = document.querySelector(".Second");

      if (exploreSection) {
        exploreSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

  // ==========================================
  // 3. LEARN MORE BUTTONS
  // ==========================================

  const learnButtons = document.querySelectorAll(".B2");

  learnButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert(
        "🌍 Explore more about this destination!\n\n" +
          "Discover attractions, activities, hotels, food " +
          "and travel tips for this destination.",
      );
    });
  });

  // ==========================================
  // 4. LOGIN NAVIGATION BUTTON
  // ==========================================

  const loginBtn = document.querySelector(".B3");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const loginSection = document.querySelector(".Five");

      if (loginSection) {
        loginSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

// ==========================================
// DESTINATION FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".button button");
const destinationCards = document.querySelectorAll(".Fr3 > div");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const category = button.textContent.trim().toLowerCase();

        destinationCards.forEach(function(card) {

            const text = card.textContent.toLowerCase();

            if (category === "all") {

                card.style.display = "";

            }
            else if (category === "beach") {

                if (
                    text.includes("bali") ||
                    text.includes("maldives")
                ) {
                    card.style.display = "";
                }
                else {
                    card.style.display = "none";
                }

            }
            else if (category === "mountains") {

                if (
                    text.includes("switzerland") ||
                    text.includes("mountain")
                ) {
                    card.style.display = "";
                }
                else {
                    card.style.display = "none";
                }

            }
            else if (category === "city") {

                if (
                    text.includes("tokyo") ||
                    text.includes("paris") ||
                    text.includes("dubai") ||
                    text.includes("city")
                ) {
                    card.style.display = "";
                }
                else {
                    card.style.display = "none";
                }

            }
            else if (category === "adventure") {

                if (
                    text.includes("adventure") ||
                    text.includes("bali")
                ) {
                    card.style.display = "";
                }
                else {
                    card.style.display = "none";
                }

            }

        });

    });

});

  // ==========================================
  // 6. SEARCH BUTTON
  // ==========================================

  const searchBtn = document.querySelector(".B4");

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      const locationInput = document.getElementById("location");

      const checkInInput = document.getElementById("checkIn");

      const checkOutInput = document.getElementById("checkOut");

      const guestsInput = document.getElementById("guests");

      if (!locationInput) {
        alert("Location field not found.");

        return;
      }

      const location = locationInput.value.trim();

      const checkIn = checkInInput ? checkInInput.value : "";

      const checkOut = checkOutInput ? checkOutInput.value : "";

      const guests = guestsInput ? guestsInput.value : "";

      if (location === "") {
        alert("Please enter your destination.");

        locationInput.focus();

        return;
      }

      if (checkIn === "") {
        alert("Please select a check-in date.");

        return;
      }

      if (checkOut === "") {
        alert("Please select a check-out date.");

        return;
      }

      if (guests === "" || Number(guests) <= 0) {
        alert("Please enter the number of guests.");

        return;
      }

      alert(
        "✈️ Trip Search Successful!\n\n" +
          "Destination: " +
          location +
          "\n" +
          "Check In: " +
          checkIn +
          "\n" +
          "Check Out: " +
          checkOut +
          "\n" +
          "Guests: " +
          guests,
      );
    });
  }

  // ==========================================
  // LOGIN
  // ==========================================

  const loginButton = document.getElementById("loginButton");

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      const email = document.getElementById("loginEmail");
      const password = document.getElementById("loginPassword");

      if (email.value.trim() === "") {
        alert("Please enter your email.");
        email.focus();
        return;
      }

      if (!email.value.includes("@")) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
      }

      if (password.value.trim() === "") {
        alert("Please enter your password.");
        password.focus();
        return;
      }

      if (password.value.length < 6) {
        alert("Password must contain at least 6 characters.");
        password.focus();
        return;
      }

      // Successful login
      alert("Login successful! 🎉");
    });
  }

  // ==========================================
  // 8. CONTACT FORM VALIDATION
  // ==========================================

  const contactForm = document.querySelector(".S4box form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = contactForm.querySelector(
        'input[placeholder="Your name"]',
      );

      const emailInput = contactForm.querySelector(
        'input[placeholder="Your email"]',
      );

      const subjectInput = contactForm.querySelector(
        'input[placeholder="Subject"]',
      );

      const messageInput = contactForm.querySelector("textarea");

      const name = nameInput ? nameInput.value.trim() : "";

      const email = emailInput ? emailInput.value.trim() : "";

      const subject = subjectInput ? subjectInput.value.trim() : "";

      const message = messageInput ? messageInput.value.trim() : "";

      if (name === "") {
        alert("Please enter your name.");

        if (nameInput) nameInput.focus();

        return;
      }

      if (email === "") {
        alert("Please enter your email.");

        if (emailInput) emailInput.focus();

        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email address.");

        if (emailInput) emailInput.focus();

        return;
      }

      if (subject === "") {
        alert("Please enter the subject.");

        if (subjectInput) subjectInput.focus();

        return;
      }

      if (message === "") {
        alert("Please enter your message.");

        if (messageInput) messageInput.focus();

        return;
      }

      alert("Your message has been sent successfully! ✅");

      contactForm.reset();

      // Reset character counter
      const charCount = document.getElementById("charCount");

      if (charCount) {
        charCount.textContent = "0 / 200 characters";
      }
    });
  }

  // ==========================================
  // 9. MESSAGE CHARACTER COUNTER
  // ==========================================

  const messageBox = document.getElementById("message");

  const charCount = document.getElementById("charCount");

  if (messageBox && charCount) {
    messageBox.addEventListener("input", function () {
      const length = messageBox.value.length;

      charCount.textContent = length + " / 200 characters";
    });
  }

  // ==========================================
  // 10. LIVE DESTINATION SEARCH
  // ==========================================

  const destinationSearch = document.getElementById("searchDestination");

  if (destinationSearch) {
    destinationSearch.addEventListener("input", function () {
      const searchValue = destinationSearch.value.trim().toLowerCase();

      destinationCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (searchValue === "" || cardText.includes(searchValue)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // ==========================================
  // 11. DARK / LIGHT MODE
  // ==========================================

  const themeButton = document.createElement("button");

  themeButton.id = "themeButton";

  themeButton.textContent = "🌙 Dark Mode";

  document.body.appendChild(themeButton);

  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeButton.textContent = "☀️ Light Mode";

      localStorage.setItem("theme", "dark");
    } else {
      themeButton.textContent = "🌙 Dark Mode";

      localStorage.setItem("theme", "light");
    }
  });

  // Load saved theme

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Light Mode";
  }

  // ==========================================
  // 12. BACK TO TOP
  // ==========================================

  const topButton = document.createElement("button");

  topButton.id = "topButton";

  topButton.textContent = "⬆ Top";

  document.body.appendChild(topButton);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });

  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });

  // ==========================================
  // 13. COUNTDOWN TIMER
  // ==========================================

  const timerElement = document.getElementById("timer");

  if (timerElement) {
    let timeLeft = 5 * 60;

    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60);

      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      timerElement.textContent = minutes + ":" + seconds;

      if (timeLeft <= 0) {
        clearInterval(countdown);

        timerElement.textContent = "Offer Expired!";

        return;
      }

      timeLeft--;
    }

    // Show immediately
    updateTimer();

    const countdown = setInterval(updateTimer, 1000);
  }

  // ==========================================
  // 14. TOAST NOTIFICATION
  // ==========================================

  window.showToast = function (message) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 3000);
  };

  // ==========================================
  // 15. PAGE LOAD
  // ==========================================

  console.log("✅ Wanderly website loaded successfully!");
});
