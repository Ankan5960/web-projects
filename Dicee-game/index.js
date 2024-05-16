const imgarray=['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png',];

function getRandomindex(){
    return Math.floor(Math.random()*imgarray.length);
}

function getRandomImg(){
    let img1index=getRandomindex();
    let img2index=getRandomindex();

    let a=document.querySelector('.img1');
    let b=document.querySelector('.img2');

    a.src=imgarray[img1index];
    b.src=imgarray[img2index];;

    if(img1index>img2index)
        document.getElementById("headtext").innerHTML="✨Player1 win";
    else if(img1index<img2index)
        document.getElementById("headtext").innerHTML="Player2 win✨";
    else
        document.getElementById("headtext").innerHTML="DRAW";    
}