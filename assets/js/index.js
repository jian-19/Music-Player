const btnprevious = document.querySelector('.previous').addEventListener('click', previousMusic);
const btnPlay = document.querySelector('.play').addEventListener('click', playMusic);
const btnnext = document.querySelector('.next').addEventListener('click', nextMusic);
const song = document.querySelector("audio");

function previousMusic() {
    console.log("clicado")
}

function playMusic() {
    const iconPlay = document.querySelector('.play')
    if (iconPlay.innerText === "play_circle") {
        iconPlay.innerText = 'pause_circle';
    }else if (iconPlay.innerText === "pause_circle") {
        iconPlay.innerText = 'play_circle';
    }
}

function nextMusic() {
    console.log("clicado")
}