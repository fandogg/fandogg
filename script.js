function playSound() {
  var audio = new Audio('https://fandogg.github.io/fandogg/Fnaf%20Nose%20honk.mp3');
  audio.play();
  setTimeout(function(){
    window.location.href = "";
  }, audio.duration * 1000);
}
