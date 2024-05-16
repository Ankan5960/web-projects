
const femalepatner = ["Aaradhya","Aditi","Ananya","Aarohi","Diya","Ishika","Jasmine","Kavya","Meera","Neha","Pooja","Riya","Sakshi","Tanvi","Uma","Vanya","Zara"];
const malepatnerpatner = ["Aarav","Aditya","Arjun","Dev","Harsh","Ishaan","Jay","Karan","Laksh","Mohan","Nikhil","Pranav","Rahul","Shiv","Tanay","Utkarsh","Vivek","Rohan"];
 
function patnerName(gender,name){
    let number=Math.floor(Math.random() * (18 - 1 + 1)) + 1;
    if(gender=='M'){
        patner1=femalepatner[number];
    }
    else{
        patner1=malepatnerpatner[number];
    }
    return patner1;
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
    var patner1 = patnerName(gender,inputname.value);
    if(!inputname.value){
        window.alert("Enter name first");
        return;
    }
    else if(!patner1){
        patnerBox.style.height="120px"
        patnerBox.innerHTML=`${inputname.value} you always be single `;
        patnerBox.style.display="block";
    }
    else{
        patnerBox.style.height="45px";
        var name=`${patner1} + ${inputname.value}`;
        if(name.length>=15)
            patnerBox.style.height="80px";        
        patnerBox.innerHTML=name;
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