function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const text = "Full Stack Developer";
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (index > 0) {
    typingText.textContent = typingText.textContent.slice(0, index - 1);
    index--;
    setTimeout(erase, 100);
  } else {
    setTimeout(type, 1000);
  }
}

type();

const date = document.getElementById("date");
date.textContent += new Date().getFullYear();
