const botonPlay = document.querySelectorAll('.boton-play');
const modal = document.querySelector('#exampleModal');



document.addEventListener('hidden.bs.modal',() =>{  
    const iframeYoutube = document.querySelector('#iframeYoutube');
    iframeYoutube.src ="";
})

botonPlay.forEach(boton =>{
    boton.addEventListener('click', videoYoutube)
    
    function videoYoutube(){
        const iframeYoutube = document.querySelector('#iframeYoutube');
        const videoSource = this.dataset.src;
        iframeYoutube.src = `https://www.youtube.com/embed/${videoSource}`
    }
})




/* document.addEventListener('DOMContentLoaded',()=>{
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
})
 

/*  document.addEventListener('hidden.bs.modal',() =>{  
    const iframeYoutube = document.querySelector('#ytplayer');
    iframeYoutube.src ="";
}) 
 
botonPlay.forEach(boton =>{
    boton.addEventListener('click',onYouTubePlayerAPIReady)
    
    var player;
    function onYouTubePlayerAPIReady(){
    const videoSource = this.dataset.src;
     iframeYoutube.src = `https://www.youtube.com/embed/${videoSource}` 
    if(!player){
    player = new YT.Player('ytplayer', {
    height: '390',
    width: '640',
    videoId: videoSource,
    events: {
        // call this function when player is ready to use
        'onReady': onPlayerReady
      }
    });
  
    }else{
       
        player.loadVideoById(videoSource)

    }
  
}

function onPlayerReady(event) {
  
    // bind events
    const playButton = document.querySelector(".iframe-overlay");
    playButton.addEventListener("click", function() {
      console.log('play');
      player.playVideo();
    });    
  }

   /*  document.addEventListener('hidden.bs.modal',() =>{  
        player.stopVideo();
    })  

}) */


