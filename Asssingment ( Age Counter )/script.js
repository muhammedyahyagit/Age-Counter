var ageCounter = Number(prompt("Enter your age"));

if (ageCounter < 12) {
    alert("You are classified as an Child.");
} else if (ageCounter <= 19) {
    alert("You are classified as an Teenager.");
} else if (ageCounter <= 64) {
    alert("You are classified as an Adult.");
} else if (ageCounter >= 65) {
    alert("You are classified as an Senior.");
} else {
    alert("Your age is not coorect , please enter your correct age.");
};