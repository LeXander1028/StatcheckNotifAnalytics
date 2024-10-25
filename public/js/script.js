document.addEventListener("DOMContentLoaded", () => {
  loadContent("home");
});

// Sidebar elements
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let reservationBtn = document.querySelector(".reservation-btn");
let menuTooltip = document.querySelector(".logo-details .tooltip");

// Profile elements
const profileSection = document.querySelector(".profile");
const profileDropup = document.querySelector(".profile-dropup");
let isDropupOpen = false;

// Update menu tooltip text
function updateMenuTooltip() {
  if (sidebar.classList.contains("open")) {
    menuTooltip.textContent = "Collapse";
  } else {
    menuTooltip.textContent = "Expand";
  }
}

// Menu button click handler
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
  updateMenuTooltip();
});

// Reservation button click handler
reservationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!sidebar.classList.contains("open")) {
    sidebar.classList.add("open");
    menuBtnChange();
    updateMenuTooltip();
  }
  e.currentTarget.parentElement.classList.toggle("showMenu");
});

// Sidebar button icon changes
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// Profile Dropup Functionality
// Toggle dropup menu
profileSection.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event from bubbling up
  isDropupOpen = !isDropupOpen;
  profileDropup.classList.toggle("show", isDropupOpen);
});

// Close dropup when clicking outside
document.addEventListener("click", (e) => {
  if (!profileSection.contains(e.target)) {
    isDropupOpen = false;
    profileDropup.classList.remove("show");
  }
});

// Handle dropup menu items
document.querySelectorAll(".dropup-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering profile click event
    const action = e.currentTarget
      .querySelector("span")
      .textContent.toLowerCase();

    // Handle menu item clicks
    switch (action) {
      case "my profile":
        console.log("Navigate to profile");
        break;
      case "settings":
        console.log("Open settings");
        break;
      case "help":
        console.log("Show help");
        break;
      case "logout":
        console.log("Perform logout");
        break;
    }

    // Close the dropup after action
    isDropupOpen = false;
    profileDropup.classList.remove("show");
  });
});

// Prevent dropup from closing when clicking inside it
profileDropup.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Initialize tooltip on page load
updateMenuTooltip();

// Optional: Close dropup when sidebar state changes
closeBtn.addEventListener("click", () => {
  if (isDropupOpen) {
    isDropupOpen = false;
    profileDropup.classList.remove("show");
  }
});

// Optional: Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth <= 420) {
    sidebar.classList.remove("open");
    menuBtnChange();
    updateMenuTooltip();
    if (isDropupOpen) {
      isDropupOpen = false;
      profileDropup.classList.remove("show");
    }
  }
});
