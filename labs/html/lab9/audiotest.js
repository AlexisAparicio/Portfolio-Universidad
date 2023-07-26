function Reproducir(){
    let audio=document.getElementById("mi-audio");
    audio.play();
}

function Pausar(){
    let audio= document.getElementById("mi-audio");
    audio.pause();
}

function CrearAudioDinamicamente(){
    let audio=document.createElement("audio");
    audio.src="/music/music2.mp3";
    audio.addEventListener('ended', function(){
        setTimeout(function(){audio.play();},500);
    },false);
    audio.play();
}

function VerOtrasPropiedades(){
    let audio=document.getElementById('mi-audio');
    let tiempo=audio.currentTime;
    let duracion=audio.duration;
    let estadored = audio.networkState;
    let estado= audio.readyState;
    
    alert("Tiempo actual de reproducciòn: "+ tiempo);
    alert(`Duraciòn total del audio: ${duracion}`);
    alert("Estado de red: "+estadored);
    alert("Estado de carga: "+estado);

}