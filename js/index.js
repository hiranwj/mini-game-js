// const player = document.getElementById('player');
const player = document.querySelector('#player');

// const ground = document.getElementById('ground');
const ground = document.querySelector('#ground');

let dx = 0;
let dy = 5;
const acceleration = 0.1;

setInterval(()=>{

    if ((player.offsetLeft + player.offsetWidth) > innerWidth) {
        dx = 0;
        player.style.left = `${innerWidth - player.offsetWidth}px`;
    }
    else if (player.offsetLeft < 0) {
        dx = 0;
        player.style.left = '0';
    }

    if ((player.offsetTop + player.offsetHeight) > ground.offsetTop) {
        dy = 0;
        player.style.top = `${ground.offsetTop - player.offsetHeight}px`;
    }
    else {
        dy += acceleration;
    }   

    player.style.left = `${player.offsetLeft + dx}px`
    player.style.top = `${player.offsetTop + dy}px`;
}, 17);

/* 17 - frame rate */

addEventListener('keydown', ({ key }) => {

    if (key === "ArrowRight") {
        dx = 10;
    }
    else if (key === "ArrowLeft") {
        dx = -10;
    }
    else if(key === "ArrowUp") {
        dy = -20;
    }
});

addEventListener('keyup', ({ key }) => {
    if (key === "ArrowRight" || key === "ArrowLeft") {
        dx = 0;
    }

    if(key == "ArrowUp") {
        dy = 0;
    }
});