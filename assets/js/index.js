// VARIAVEIS E ARRAYS PARA RECEBER E ARMAZENAR INFORMAÇÕES //
const btnprevious = document.querySelector('.previous').addEventListener('click', previousMusic);
const btnPlay = document.querySelector('.play').addEventListener('click', playMusic);
const btnnext = document.querySelector('.next').addEventListener('click', nextMusic);
const song = document.querySelector("audio");

const progressBarContainer = document.querySelector('.bar');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

const timeDisplays = document.querySelectorAll('.time p');
const playList = [
    './assets/music/ComeAsYouAre.mp3',
    './assets/music/SweetChildOMine.mp3',
    './assets/music/WhereAreYouNow.mp3'
];

let currentMusic = 0;

const albumImages = [
    './assets/img/albuns/nirvana.jpg',
    './assets/img/albuns/guns.png',
    './assets/img/albuns/nazareth.jpg',

];

const albumCover = document.querySelector('.album-cover');

const songNames = [
    'Come As You Are',
    'Sweet Child O Mine',
    'Where Are You Now'
];

const songName = document.querySelector('.title');

const artistNames = [
    'Nirvana',
    'Guns N Roses',
    'Nazareth'
];

const artistName = document.querySelector('.artist');

// FUNÇÕES //

// FUNÇÃO VOLTAR MÚSICA //
function previousMusic() {
    currentMusic = (currentMusic - 1 + playList.length) % playList.length;
    song.src = playList[currentMusic];
    song.play();
    albumCover.src = albumImages[currentMusic];
    songName.innerText = songNames[currentMusic];
    artistName.innerText = artistNames[currentMusic];
}
// FUNÇÃO PLAY/PAUSE MÚSICA //
function playMusic() {
    const iconPlay = document.querySelector('.play')
    if (iconPlay.innerText === "play_circle") {
        song.play();
        iconPlay.innerText = 'pause_circle';
        albumCover.src = albumImages[currentMusic];
        songName.innerText = songNames[currentMusic];
        artistName.innerText = artistNames[currentMusic];
    } else if (iconPlay.innerText === "pause_circle") {
        iconPlay.innerText = 'play_circle';
        song.pause();
    }
}
// FUNÇÃO AVANÇAR MÚSICA //
function nextMusic() {
    currentMusic = (currentMusic + 1) % playList.length;
    song.src = playList[currentMusic];
    song.play();
    albumCover.src = albumImages[currentMusic];
    songName.innerText = songNames[currentMusic];
    artistName.innerText = artistNames[currentMusic];
}
// ADICIONANDO CLICK AO PROGRESSBAR PARA AVANÇO //
progressBarContainer.addEventListener('click', handleProgressBarClick);

function handleProgressBarClick(event) {
    const clickPosition = event.clientX - progressBarContainer.getBoundingClientRect().left;
    const progressBarWidth = progressBarContainer.clientWidth;
    const progressPercentage = (clickPosition / progressBarWidth) * 100;
    const songDuration = song.duration;
    const newPosition = (progressPercentage / 100) * songDuration;

    song.currentTime = newPosition;
}

song.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
    const duration = song.duration;
    const currentTime = song.currentTime;
    const progressPercentage = (currentTime / duration) * 100;
    progress.style.width = progressPercentage + '%';

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);

    let durationMinutes = 0;
    let durationSeconds = 0;
    // VERIFICANDO SE OS MINUTOS E SEGUNDOS SAO MAIORES QUE 0 PARA EVITAR
    //ERRO NaN//
    if (duration > 0 && !isNaN(duration)) {
        durationMinutes = Math.floor(duration / 60);
        durationSeconds = Math.floor(duration % 60);
    }

    timeDisplays[0].textContent = `${currentMinutes}:${formatTime(currentSeconds)}`;
    timeDisplays[1].textContent = `${durationMinutes}:${formatTime(durationSeconds)}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
