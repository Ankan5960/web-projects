var id;
var ele=document.getElementsByClassName('drum');
var audioarr=["sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3"];
var imgarr=['./images/crash.png','./images/kick.png','./images/snare.png','./images/tom1.png','./images/tom2.png','./images/tom3.png','./images/tom4.png']

var keymap= new Map([
    ["w",0],
    ["a",1],
    ["s",2],
    ["d",3],
    ["j",4],
    ["k",5],
    ["l",6]
])

$(document).keypress(function (e) { 
    var id=keymap.get(e.key);
    var aud=new Audio(audioarr[id]);
    aud.play();
    ele[id].style.backgroundImage = `url(${imgarr[id]})`;
    setTimeout(async function() {
        ele[id].style.backgroundImage = 'unset';
    }, 200); 
});
