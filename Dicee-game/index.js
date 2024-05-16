const imgarray=['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png',];

function getRandomindex(){
    return Math.floor(Math.random()*imgarray.length);
}

function getRandomImg(){
    let img1index=getRandomindex();
    let img2index=getRandomindex();
    const img1=imgarray[img1index];
    const img2=imgarray[img2index];
    let a=document.querySelector('.img1');
    a.src=img1;
    let b=document.querySelector('.img2');
    b.src=img2;

    if(img1index>img2index)
        document.getElementById("headtext").innerHTML="✨Player1 win";
    else if(img1index<img2index)
        document.getElementById("headtext").innerHTML="Player2 win✨";
    else
        document.getElementById("headtext").innerHTML="DRAW";
   
    console.log(img1index>img2index);
    console.log(b);
    
}

let img1index=getRandomindex();
let img2index=getRandomindex();
const img1=imgarray[img1index];
const img2=imgarray[img2index];
let a=document.querySelector('.img1');
a.src=img1;
let b=document.querySelector('.img2');
b.src=img2;

if(img1index>img2index)
    document.getElementById("headtext").innerHTML="✨Player1 win";
else if(img1index<img2index)
    document.getElementById("headtext").innerHTML="Player2 win✨";
else
    document.getElementById("headtext").innerHTML="DRAW";


