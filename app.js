window.addEventListener('keydown', function(event){
    
 const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
if (!audio) return; //stops the function from running

audio.play();
console.log(audio);
});