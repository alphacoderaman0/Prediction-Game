document.addEventListener('contextmenu', event => event.preventDefault());
    function Start(){
        num = document.getElementById("num").value;
        r = Math.floor(Math.random() * 11);
        document.getElementById("me").innerHTML = num;
        document.getElementById("com").innerHTML = r;
        if(isNaN(num) || num < 1 || num > 11){
            document.getElementById("result").innerHTML = "Enter Any Value(1-10)";
            document.getElementById("result").style.color= "red";

            document.getElementById("com").innerHTML = "";
            document.getElementById("me").innerHTML = "";
        }
        else if(num == r){
        document.getElementById("result").innerHTML = "! YOU WON !";
        document.getElementById("result").style.color= "rgba(85, 229, 85, 0.942)";

        }
        else{
        document.getElementById("result").innerHTML = "! YOU LOSE !";
        document.getElementById("result").style.color= "red";

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