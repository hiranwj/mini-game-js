// const playerElm = document.querySelector('#player');
const playerElm = document.getElementById('player');
console.log(playerElm);
let dx = 0;

setInterval(()=>{
    playerElm.style.left = `${playerElm.offsetLeft + dx}px`
}, 17); 
/* 17 - frame rate */

addEventListener('keydown', ({ key }) => {

    if (key === "ArrowRight") {
        dx = 10;
    }
    else if (key === "ArrowLeft") {
        dx = -10;
    }
});

addEventListener('keyup', ({ key }) => {
    if (key === "ArrowRight" || key === "ArrowLeft") {
        dx = 0;
    }
});