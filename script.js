let canvas = document.getElementById("snake"); //O gementById ele pega o ID escolhido 
let context = canvas.getContext("2d"); //O getContext faz com que o arquivo se comporte conforme foi definido, neste caso em 2d
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
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

criarBG();
criarCobrinha();