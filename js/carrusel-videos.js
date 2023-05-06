const botonPlay = document.querySelectorAll('.boton-play');
const modal = document.querySelector('#exampleModal');
const iframeYoutube = document.querySelector('#iframeYoutube');
const informacionOverlay = document.querySelector('.data-informacion');
const tituloOverlay = document.querySelector('.data-title');
const transmisionOverlay = document.querySelector('.data-transmision');
const iframeOverlay = document.querySelector('.iframe-overlay');
let player;

document.addEventListener('hidden.bs.modal', () => {
  iframeYoutube.src = 'https://www.youtube.com/embed/';
  informacionOverlay.innerText = '';
  tituloOverlay.innterText = '';
  transmisionOverlay.innterTextSSS = '';
  iframeOverlay.style.display = 'flex';
});

iframeOverlay.addEventListener('click', ocultarOverlay);

botonPlay.forEach((boton) => {
  boton.addEventListener('click', videoYoutube);

  function videoYoutube() {
    const videoSource = this.dataset.src;
    const informacion = this.dataset.information;
    const titulo = this.dataset.title;
    const transmision = this.dataset.transmition;
    informacionOverlay.innerText = informacion;
    tituloOverlay.innerText = titulo;
    transmisionOverlay.innerText = transmision;
    iframeYoutube.src = `https://www.youtube.com/embed/${videoSource}?enablejsapi=1`;

    player = new YT.Player('iframeYoutube');
  }
});

function ocultarOverlay() {
  iframeOverlay.style.display = 'none';

  player.playVideo();
}

/* function onYouTubeIframeAPIReady(video) {
    player = new YT.Player(iframeYoutube, {
      videoId: video ,
      
    });
    
} */

document.addEventListener('DOMContentLoaded', () => {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

//   document.addEventListener('hidden.bs.modal',() =>{
//     const iframeYoutube = document.querySelector('#ytplayer');
//     iframeYoutube.src ="";
// })

// botonPlay.forEach(boton =>{
//     boton.addEventListener('click',onYouTubePlayerAPIReady)

//     var player;
//     function onYouTubePlayerAPIReady(){
//     const videoSource = this.dataset.src;
//      iframeYoutube.src = `https://www.youtube.com/embed/${videoSource}`
//     if(!player){
//     player = new YT.Player('ytplayer', {
//     height: '390',
//     width: '640',
//     videoId: videoSource,
//     events: {
//         // call this function when player is ready to use
//         'onReady': onPlayerReady
//       }
//     });

//     }else{

//         player.loadVideoById(videoSource)

//     }

// }

// function onPlayerReady(event) {

//     // bind events
//     const playButton = document.querySelector(".iframe-overlay");
//     playButton.addEventListener("click", function() {
//       console.log('play');
//       player.playVideo();
//     });
//   }

//    /*  document.addEventListener('hidden.bs.modal',() =>{
//         player.stopVideo();
//     })

// })
