// This script generates a random 4-digit OTP and displays it on the webpage when the button is clicked.
const generateBtn = document.getElementById('generateBtn');
const showOtp= document.getElementById('showOtp');
let otp;
generateBtn.addEventListener("click",()=>{

    otp = Math.floor(Math.random() * 9000)+1000; // Generates a random 4-digit OTP
    showOtp.innerText = "OTP :- "+otp;
    showOtp.style.display = "block";

})

// verify functionality
let otpInput = document.getElementById('otpInput');
const verifyBtn = document.getElementById('verifyBtn');

verifyBtn.addEventListener("click",()=>{
    otpInput=Number(otpInput.value); // Get the value from the input field
    console.log("Generate OTP :- "+otp);
    console.log("Input otp :- "+otpInput);
    if(otp===otpInput){
        alert("OTP Verified Successfully");
        otpInput.value = ""; // Clear the input field
    }
    else{
        alert("Invalid OTP");
    }
})


