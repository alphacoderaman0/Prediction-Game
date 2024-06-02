    function Start(){
        num = document.getElementById("num").value;
        r = Math.floor(Math.random() * 10);
        document.getElementById("me").innerHTML = num;
        document.getElementById("com").innerHTML = r;
    
    
        if(num == r){
        document.getElementById("result").innerHTML = "! YOU WON !";
        }
        else{
        document.getElementById("result").innerHTML = "! YOU LOSE !";
        }
    }






// function generateOtp(length){
// 	let otp = " ";
// 	for(let i = 0; i < length; i++){
// 		otp += Math.floor(Math.random() * 10).toString();
// 	}
// 	return otp;
// }
// let r = generateOtp(1)
// let n = prompt("Enter number");

// if (n==r){
//     alert("you won");
// }
// else{
//     alert("you loose")
// }
// console.log(r)