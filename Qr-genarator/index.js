/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
let qrcode = new QRCode( 
    document.querySelector("#Qrbox")
); 

var url=document.getElementById('inputName');

// Initial QR code generation 
// with a default message 
// qrcode.makeCode("Why did you scan me?"); 
// console.log(qrcode);
// Function to generate QR 
// code based on user input 
function generateQr() { 
    if ( url.value === "" || url.value === " ") { 
        window.alert("Input Field Can not be blank!");
    }  
    else { 
        qrcode.makeCode(url.value); 
        document.querySelector("#Qrbox").style.display="block";
    }
}