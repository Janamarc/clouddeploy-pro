function showMessage() {
    alert("CI/CD Pipeline Successfully Connected to AWS EC2 Server!");
}

let counter = document.getElementById("counter");
let count = 0;

let interval = setInterval(() => {
    count++;
    counter.innerText = count;

    if (count >= 120) {
        clearInterval(interval);
    }
}, 30);
