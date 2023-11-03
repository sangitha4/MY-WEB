document.querySelector("button").addEventListener("click" , function() {
    let otp=" ";
    for(i=0;i<6;i++){
        let randNum=Math.floor(Math.random()*6);
otp  +=randNum;

    }
    document.querySelector("p").innerHTML=otp;
})