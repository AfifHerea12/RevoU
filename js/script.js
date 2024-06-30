document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
});

window.addEventListener("load", function() {
  const userName = prompt("Masukkan nama anda:");
  if (userName) {
      document.querySelector(".name").textContent = userName;
  }
});
