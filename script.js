let canvas = document.getElementById("snake"); //O gementById ele pega o ID escolhido 
let context = canvas.getContext("2d"); //O getContext faz com que o arquivo se comporte conforme foi definido, neste caso em 2d
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = "lightgreen" ;//O fillStyle trabalha com o estilo do nosso canvas
    context.fillRect(0, 0, 16 * box, 16 * box); // O fillRect ele vai desenhar onde vai acontecer o jogo
} //esta funçao esta pegando o nosso canvas, ele vai desenhar e definir nosso canvas

function criarCobrinha() {
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//Criar a comida da cobrinha
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box); 
}

//Movimento do teclado mudando a direcao da snak
document.addEventListener('keydown', update);

function update (event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

//Vamos criar uma funcao para atualizar o jogo
function iniciarJogo() {
    //mudar propiedade da snak ao chegar em um determinado ponto
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake [0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    //Quando a cobrinha esbarra no porpio corpo o jogo vai terminar
    for(i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert("Game Over :(");
        }
    }

    criarBG(); //criar BackGround
    criarCobrinha(); //criar a cobrinha
    drawFood(); //desenhar a comidinha

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //Cordenadas
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }
    else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    //Adicionando um elemento na snake

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);