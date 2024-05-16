
function audioplay(word){
    switch (word) {
        case "w":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "a":
            var aud=new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        case "s":
            var aud=new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "d":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "j":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "k":
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "l":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;    
        default: 
            break;
    }
}

$(document).keypress(function (e) { 
    audioplay(e.key);
    //console.log(e.key);    
});
