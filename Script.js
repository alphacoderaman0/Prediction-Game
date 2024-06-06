
    function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3)) return false;
    }
    document.oncontextmenu = mischandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
    function disableCtrlKeyCombination(e) {
        var forbiddenKeys = new Array("a", "s", "c", "x","u");
        var key;
        var isCtrl;
        if (window.event) {
            key = window.event.keyCode;
            //IE
            if (window.event.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        else {
            key = e.which;
            //firefox
            if (e.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        if (isCtrl) {
            for (i = 0; i < forbiddenKeys.length; i++) {
                //case-insensitive comparation
                if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }







document.addEventListener('contextmenu', event => event.preventDefault());
    function Start(){
        num = document.getElementById("num").value;
        r = Math.floor(Math.random() * 11);
        document.getElementById("me").innerHTML = num;
        document.getElementById("com").innerHTML = r;
        if(isNaN(num) || num < 1 || num > 10){
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