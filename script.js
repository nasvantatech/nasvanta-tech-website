const canvas = document.getElementById("cyberCanvas");
const ctx = canvas.getContext("2d");

let width, height;
let symbols = [];
const fontSize = 20;
const columns = [];

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = 300; // only header height

    const cols = Math.floor(width / fontSize);
    for (let i = 0; i < cols; i++) {
        columns[i] = Math.floor(Math.random() * height / fontSize);
    }

    requestAnimationFrame(draw);
}

function draw() {
    ctx.fillStyle = "rgba(18,18,18,0.1)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#00ffea";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < columns.length; i++) {
        const text = String.fromCharCode(33 + Math.random() * 94);
        ctx.fillText(text, i * fontSize, columns[i] * fontSize);

        if (columns[i] * fontSize > height && Math.random() > 0.975) {
            columns[i] = 0;
        }
        columns[i]++;
    }

    requestAnimationFrame(draw);
}

window.addEventListener("resize", init);
init();