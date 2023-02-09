// const player = document.querySelector('#player');
const player = document.getElementById('player');


addEventListener('keydown', ({ key }) => {
    // console.log('Key DOWN');
    if (key === "ArrowRight") {
        console.log('ArrowRight');
    }
});

addEventListener('keyup', ({ key }) => {
    // console.log('Key UP');
    if (key === "ArrowLeft") {
        console.log('ArrowLeft');
    }
});