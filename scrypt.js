//Password Length input
var passeworLength = document.getElementById("passewordLength")

//checkBox nbLowerCaseChar
var nbLowerCaseChar = document.getElementById("nbLowerCaseChar")
var upperCaseChar = document.getElementById("upperCaseChar")
var numericalChar = document.getElementById("numericalChar")
var specialChar = document.getElementById("specialChar")
var inputPasseword = document.getElementById("Passeword")

//buttons
var btnGeneratepw = document.getElementById("generatepw")
var btnCopyPassword = document.getElementById("copyPassword")

//Caracters
var charNombersString = "0213456789";
var lowerCaseCharsString = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharactersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharString = "!@#$%^&*()_+~`|}{[]\:;?><,./-="

//Click button to copy
btnCopyPassword.addEventListener("click", function () {
    inputPasseword.select()
    document.execCommand("copy")

    alert("copied your new password");
})

//Generate password
btnGeneratepw.addEventListener("click",function () {

    var password = ""
    var len = passewordLength.value

    if (isNaN(len)) {    
        alert("This is not a number")
    } else {
        if(len < 8) {
            alert("the number is too low")
         }else if (len > 128){
             alert("This number is too hight")
            
         }

    }
    inputPasseword = password_generator(len)
})

    console.log(nbLowerCaseChar.checked)
       inputPasseword.value = password_generator(
        parseInt(len),
           upperCaseChar.checked,
           //nbLowerCaseChar.checked,
           numericalChar.checked,
           specialChar.checked
            )
       


       function password_generator(len) {
        let length = (len) ? (len) : (10);
        let string = "abcdefghijklmnopqrstuvwxyz"; 
        let numeric = '0123456789';
        let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let password = "";
        let character = "";
        let crunch = true;
        while (password.length < length) {
   
             entity1 = Math.ceil(string.length * Math.random() * Math.random());
   
   
             entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
             entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
             hold = string.charAt(entity1);

             hold =(password.length % 2 ==0) ? (hold. toUpperCase()) : (hold);
    
             character += hold;
             character += numeric.charAt(entity2);
             character += punctuation.charAt(entity3);
             password = character;
        }
   
   
        password = password.split('').sort(function () {
             return 0.5 - Math.random()
        }).join('');
   
        return password.substr(0, len);
   }

            
