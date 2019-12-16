//Generate functions 

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
    if (passewordLenghtinnumber < 5 ){
        alert("the number is too lower")
    }
}
}
 btng.addEventListener("click",generatePassword)


 //set the passeword lenght
 
//  var cuppercase = confirm("Would you like to use uppercase letters?");
//     var clowercase = confirm("Would you like to use lowercase letters?");
//     var cnumbers = confirm("would you like to use numbers?");
//     var csymbols = confirm("would you like to use special characters?");


    