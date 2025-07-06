// Typing Animation for Name
const nameText = "My Name Is Omar Noor Ilahi";
const nameElement = document.querySelectorAll("h1")[1];
let index = 0;

function typeWriter() {
    if (index < nameText.length) {
        nameElement.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 100); 
    }
}

nameElement.textContent = "";
typeWriter();

// Button Interaction
const button = document.querySelector('.cta');

button.addEventListener('click', () => {
    button.textContent = "Thanks for Waiting!";
    button.style.backgroundColor = "#4CAF50"; // change color to green
    button.style.color = "#fff"; // text color white
    button.style.border = "none";
});
