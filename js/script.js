const text = "Halo, Saya Ardy Mata Tirta";
const typingElement = document.getElementById("typing-text");

let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    typingElement.textContent = text.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === text.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500); // jeda sebelum menghapus
      return;
    }
  } else {
    typingElement.textContent = text.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeLoop, isDeleting ? 50 : 100); // kecepatan mengetik / hapus
}

document.addEventListener("DOMContentLoaded", typeLoop);