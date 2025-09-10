// Function triggering DOM changes(dark mode)
let darkmode = () => {
    document.body.classList.toggle("dark-mode");
}

// Fuctions calculating values.
function add (num1, num2) {
    return num1 + num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}   
// Testing the functions
console.log("Sum of 5 and 10: " + add(5, 10));
console.log("Product of 3 and 4: " + multiply(3, 4));



// Function controlling animations

function startAnimation() {
    const ball = document.getElementById("SlideBall");
    ball.classList.add("animate");                               
}

function stopAnimation() {
    // Local variable
    const ball = document.getElementById("SlideBall");
    ball.classList.remove("animate");                               
}

// Global variable
const btn = document.getElementById("AnimateButton")

// Event listener
btn.addEventListener("click", () => {
    if (btn.innerText === "Start Animation") {
        startAnimation();
        btn.innerText = "Stop Animation";
    } else {
        stopAnimation();
        btn.innerText = "Start Animation";
    }
});

// Card flip functionality
const card = document.getElementById('card')

// Flip the card when clicked
card.addEventListener('click', function() {
    card.classList.toggle('flipped');
});