<p id = "demo"></p>

let text;
if (Math.random() > 0.5) {
    text = "<a href='https://www.w3schools.com'>Visit W3Schools.com!</a>";
} else {
    text = "<button onclick='alert(\"Hello World!\")'>Click Me!</button>";
}
document.getElementById("demo").innerHTML = text;
