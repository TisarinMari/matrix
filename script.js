import { Column } from "./column.js";

const canvas = document.getElementById("canvas"); // ссылка на элемент canvas
const context = canvas.getContext("2d"); // ссылка на элемент для рисования

//размеры canvas в пикселях, если не прописать - изображение будет непропорциональным
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//размер шрифта
const FONT_SIZE = 16;

const columns = [];
const columnsCount = canvas.width / FONT_SIZE;

for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
}

//шрифт
context.font = `bold ${FONT_SIZE}px monospace`;

const column = new Column(100, FONT_SIZE, canvas.height, context);

//анимация падающего символа
function animate() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";//рисуем чёрный прямоугольник,который будет перекрывать нарисованный символ
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "purple";//цвет шрифта
    columns.forEach(column => column.drawSymbol());

    setTimeout(() => requestAnimationFrame(animate), 70);// создание анимации и перерисовка на следующем кадре
}

animate();