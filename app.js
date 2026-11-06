
const player = document.getElementById('player');
const beyonce = document.getElementById('beyonce');
const gameArea = document.getElementById('game-area');

let playerPosition = { x: 50, y: 50 };
let aimePosition = { x: 700, y: 550 };
let vida = 1;
let pausa = false; 

const playerSpeed = 50;

window.addEventListener('keydown', (event) => {

    if (event.key === 'p' || event.key === 'P' || event.key === 'Escape') {
        if (event.repeat) return;   
        pausa = !pausa;
        gameArea.style.opacity = pausado ? 0.5 : 1;
        return;                     
    }
}
    if (pausa) return;


    switch(event.key){
        case 'ArrowUp':
            if (playerPosition.y > 0) playerPosition.y -= playerSpeed;
        break;
        case 'ArrowDown':
            if (playerPosition.y < gameArea.clientHeight - 50) playerPosition.y += playerSpeed;
        break;
        case 'ArrowLeft':
            if (playerPosition.x > 0) playerPosition.x -= playerSpeed;
        break;
        case 'ArrowRight':
            if (playerPosition.x < gameArea.clientWidth - 50) playerPosition.x += playerSpeed;
        break;
    }
    updatePositions();
});

let AimeSpeed = 1;

function movePricha() {
    if (aimePosition.x < playerPosition.x) {
        aimePosition.x += AimeSpeed;
    } else if (aimePosition.x > playerPosition.x) {
        aimePosition.x -= AimeSpeed;
    }

    if (aimePosition.y < playerPosition.y) {
        aimePosition.y += AimeSpeed;
    } else if (aimePosition.y > playerPosition.y){
        aimePosition.y -= AimeSpeed;
    }

    updatePositions();
    checkCollision();
    updateVel();

}

function updatePositions() {
    player.style.transform = `translate(${playerPosition.x}px, ${playerPosition.y}px)`;
    beyonce.style.transform = `translate(${aimePosition.x}px, ${aimePosition.y}px)`;
}

function checkCollision() {
    if (Math.abs(playerPosition.x - aimePosition.x) < 10 &&
        Math.abs(playerPosition.y - aimePosition.y) < 10) {
        alert('¡ups!');

        playerPosition = { x: 50, y: 50};
        aimePosition = { x: 300, y: 300};

        AimeSpeed = 1;
        updatePositions();
        
    }
}

function updateVel() {
    AimeSpeed = AimeSpeed + 0.001;
}


function gameLoop() {
    if (!pausa) {
    movePricha();
    }
    requestAnimationFrame(gameLoop);
}

gameLoop();
