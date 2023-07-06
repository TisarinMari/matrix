const CHARACTERS = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";

//логика отрисовки символов
export class Column {
    constructor(x, fontSize, canvasHeight, context) {//задаёт необходимые значения
        this.x = x;
        this.y = 0;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.context = context;
    }


    drawSymbol() {
        if (this.y ===0 && Math.random() < 0.98) {//случайная задержка падения символа
          return;  
        }

        const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
        const symbol = CHARACTERS[characterIndex];

        this.context.fillText(symbol, this.x, this.y);

        if (this.y > this.canvasHeight) {
            this.y = 0;
        } else {
            this.y += this.fontSize;
        }
    }
}