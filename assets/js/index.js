const btnprevious = document.querySelector('.previous').addEventListener('click', previousMusic);
const btnPlay = document.querySelector('.play').addEventListener('click', playMusic);
const btnnext = document.querySelector('.next').addEventListener('click', nextMusic);




function previousMusic() {

}
function playMusic() {
    const iconPlay = document.querySelector('.play')
    if (iconPlay.value = "play_circle") {
        iconPlay.innerText = 'pause_circle';
        iconPlay.value = 'pause_circle'
    }
    else if (iconPlay.value = "pause_circle") {
        iconPlay.innerText = 'play_circle';
        iconPlay.value = 'play_circle'
    }
}
function pauseMusic() {
    if (iconPlay.value = "pause_circle") {
        iconPlay.innerText = 'play_circle';
        iconPlay.value = 'play_circle'
    }
}
function nextMusic() {
    console.log("clicado")
}