function kj(e){
  //var buttonText=e.key;
  switch (e) {
    case "w":
      var song = new Audio('sounds/crash.mp3');
      song.play();
      break;
    case "a":
      var song = new Audio('sounds/kick-bass.mp3');
      song.play();
      break;
    case "s":
      var song = new Audio('sounds/snare.mp3');
      song.play();
      break;
    case "d":
      var song = new Audio('sounds/tom-1.mp3');
      song.play();
      break;
    case "j":
      var song = new Audio('sounds/tom-2.mp3');
      song.play();
      break;
    case "k":
      var song = new Audio('sounds/tom-3.mp3');
      song.play();
      break;
    case "l":
      var song = new Audio('sounds/tom-4.mp3');
      song.play();
      break;
    default:
  }
}
function buttonAnimation(key){
  var activeButton=document.querySelector('.'+key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}
for(var i=0;i<document.querySelectorAll('.drum').length;i++){
  document.querySelectorAll('.drum')[i].addEventListener("click",function(){
    // alert("I was clicked!");

    //this.style.color="white";
    var buttonText=this.textContent;
    kj(buttonText);
    buttonAnimation(buttonText);
    document.addEventListener("keydown",function(e){
      kj(e.key)
      buttonAnimation(e.key);
    });



  });
}
