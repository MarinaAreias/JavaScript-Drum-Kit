window.addEventListener('keydown', function(event){
    
 const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
 const key  = document.querySelector(`.key[data-key="${event.keyCode}"]`);

 if (!audio) return; //stops the function from running

audio.currentTime=0; //rewinde to start
audio.play();

key.classList.add('playing');

});

const keys = document.querySelectorAll('.key');