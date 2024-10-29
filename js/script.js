// Countdown Timer
const launchDate = new Date("Dec 31, 2024 23:59:59").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Launched!";
    }
}, 1000);

// Email Subscription Form
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    if (validateEmail(email)) {
        document.getElementById("subscription-message").innerText = "Thank you for subscribing!";
        document.getElementById("email").value = "";
    } else {
        document.getElementById("subscription-message").innerText = "Please enter a valid email address.";
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
