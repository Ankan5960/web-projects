var patner1="";

const femalepatner = ["Ankita","Subhasree","Smriti","Anushka","Srija","Kankana","Moumita","Somaroti","Jenifa","Priyanka","Pratysha","Sampreeti","Shuhani","Soni","Purba","Poushali","Neha"];
const malepatnerpatner = ["Shuven","Rohan","Tanmoy","Writ","Jeet","Devraj","Subhadeep","Abhijaan","Abhik","Ayan","Abhradeep","Aritra","Binayak","Debojyoti","Joti","Manojit","Sujoy","Suprodip",];
 
function patnerName(gender,name){
    let number=Math.floor(Math.random() * (18 - 1 + 1)) + 1;
    console.log(number);
    if(gender=='M'){
        patner1=femalepatner[number];
    }
    else{
        patner1=malepatnerpatner[number];
    }
}

var inputname=document.getElementById("inputName");
var patnerBox=document.getElementById('patnerBox');
var male=document.getElementById('MaleId');
var female=document.getElementById('FemaleId');


function GetName(){
    //patnerName()
    var gender="";
    if(male.checked && !female.checked){
        gender="M";
    }
    else if(!male.checked && female.checked){
        gender="F";
    }
    else if((male.checked && female.checked)||(!male.checked && !female.checked)){
        window.alert("Checked gender");
        return ;
    }
    patnerName(gender,inputname.value);
        if(!inputname.value){
            window.alert("Enter name first");
            return;
        }
        else if(!patner1){
            patnerBox.innerHTML=`${inputname.value} you always be single `;
            patnerBox.style.display="block";
        }
        else{
            patnerBox.innerHTML=`${patner1} + ${inputname.value}`;
            patnerBox.style.display="block";
        }
};

function reponsive(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    if(w<=615 && w>559){
        patnerBox.style.height="70px";
        patnerBox.style.fontSize = "xx-large";
    }
    else if(w<=559 && w>270){
        patnerBox.style.fontSize = "small";
        patnerBox.style.height="20px";
    }
    else if(w<=269 && w>10){
        patnerBox.style.height="40px";
    }
    console.log(w,h);
}

reponsive();

//patnerName("M", "ankan");


// let arr=[633,0,233];

// for(let x in arr){
//     console.log(arr[x]+" x value="+ x);
// }

// for(let x of arr){
//     console.log(arr[x]) 
// }

// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }



//var id=document.getElementById('div1');
//id.innerHTML="Kannakan";

// var classname=document.getElementsByClassName('divtype');
// classname[2].innerHTML="ankan"

// var query=document.querySelector(".divtype");
// query.innerHTML="ggg";

// var quary=document.querySelectorAll(".divtype");
// quary[2].innerHTML="fff";

// console.log(quary);

// var tagname=document.getElementsByTagName('h1');

// console.log(tagname);

// tagname[0].innerHTML ="ankan";

