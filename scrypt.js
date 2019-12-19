//Set funcion for lenght

var btng = document.getElementById("generatepw")
var generatePassword = function(){
    // alert("salut")
    var passewordLenght = prompt("Enter your passeword lenght")
    var passewordLenghtinnumber = parseInt(passewordLenght)
console.log (passewordLenght )
console.log(passewordLenghtinnumber)
if (isNaN(passewordLenghtinnumber)) {
    alert("This is not a number")
}else {
    if (passewordLenghtinnumber < 8  ){
        alert("the number is too low")
    }
    else if(passewordLenghtinnumber >128){
    alert("the number is too hight")

        }
    
}
}
 btng.addEventListener("click",generatePassword)

//Generate random passeword
function generatepw(){
    let complexity = document.getElementById("slider").nodeValue;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz1234567890!@$%^&*()_+"
    let passeword = "";
}


//  //set the passeword lenght
 
// //  var cuppercase = confirm("Would you like to use uppercase letters?");
// //     var clowercase = confirm("Would you like to use lowercase letters?");
// //     var cnumbers = confirm("would you like to use numbers?");
// //     var csymbols = confirm("would you like to use special characters?");
function copyPassword(){
    document.getElementById("display").select;
    document.execCommand("Copy")
    alert("Passeword copy to clipboard");
}


    