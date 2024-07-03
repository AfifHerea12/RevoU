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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const namaDisplay = document.getElementById('displayNama');
    const tanggalLahirDisplay = document.getElementById('displayTanggalLahir');
    const jenisKelaminDisplay = document.getElementById('gender');
    const pesanDisplay = document.getElementById('pesan');
    const currentTimeDisplay = document.getElementById('time');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
        const pesan = document.querySelector('.pesan').value;

        namaDisplay.textContent = nama;
        tanggalLahirDisplay.textContent = tanggalLahir;
        jenisKelaminDisplay.textContent = jenisKelamin;
        pesanDisplay.textContent = pesan;

        const now = new Date();
        currentTimeDisplay.textContent = now.toLocaleTimeString();
    });
});

