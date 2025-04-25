const btn= document.getElementById('navLinks');
 function showMenu(){
    navLinks.style.right= "0"
 }

 function hideMenu(){
    navLinks.style.right= "-200px"
 }

 const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const paragraphs = document.querySelectorAll('p');
const heading = document.getElementById('heading'); // Select all <p> elements

// Check for saved mode preference in localStorage
const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
    body.classList.add('dark-mode');    
    modeToggle.innerHTML = '🌙'; 
    changeParagraphColor('white'); // Set initial <p> color
}

// Function to change paragraph text color
function changeParagraphColor(color) {
    paragraphs.forEach(p => {
        p.style.color = color;
    });
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change button icon and paragraph color dynamically
    if (body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = '🌙'; 
        localStorage.setItem('theme', 'dark');
        changeParagraphColor('white'); // Change text color to white in dark mode
    } else {
        modeToggle.innerHTML = '☀️';
        localStorage.setItem('theme', 'light');
        changeParagraphColor('black'); // Change text color to black in light mode
    };

    if (heading.style.color === "red") {
        heading.style.color = "blue";
    } else {
        heading.style.color = "red";
    }
});
