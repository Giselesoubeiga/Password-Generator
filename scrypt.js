//Password Length input
var passeworLength = document.getElementById("passewordLength")

//checkBox nbLowerCaseChar
var nbLowerCaseChar = document.getElementById("nbLowerCaseChar")
var upperCaseChar = document.getElementById("upperCaseChar")
var numericalChar = document.getElementById("numericalChar")
var specialChar = document.getElementById("specialChar")
var inputPasseword = document.getElementById("inputPasseword")

//buttons
var btnGeneratepw = document.getElementById("generatepw")
var btnCopyPassword = document.getElementById("copyPassword")

//Caracters
var charNombersString = "0213456789";
var lowerCaseCharsString = "abcdefghijklmnopqrstuvwxyz"
var uppercaseCharactersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharString = "!@#$%^&*()_+~`|}{[]\:;?><,./-="

//Click button to copy
btnCopyPassword.addEventListener("click", function() {
    inputPasseword.selector()
    documebt.execCommand("copy")

    alert("copied your new password");
})

//Generate password
btnGeneratepw.addEventListener("click",function () {

    var password = ""
    var len = passeworLength.value

    if (isNaN(len)) {    
        alert("This is not a number")
    } else {
        if(len < 8) {
            alert("the number is too low")
            return
         }else if (len > 128){
             alert("This number is too hight")
             return
         }
         
    }
    console.log(nbLowerCaseChar.checked)
       inputPasseword.value = password_generator(
           len,
           upperCaseChar.checked,
           //nubLowerCaseChar.checked,
           numericalChar.checked,
           specialChar.checked
            )
       })


       function password_generator(len, ckUppercaseCharactersStr, ckNumeric,ckPunctuation) {
        let length = (len) ? (len) : (10);
        let string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
        let uppercaseCharactersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let numeric = '0123456789';
        let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        let password = "";
        let character = "";
        let crunch = true;
        while (password.length < length) {
   
             entity1 = Math.ceil(string.length * Math.random() * Math.random());
   
   
             entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
             entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
   
             entity4 = Math.ceil(uppercaseCharactersString.length * Math.random() * Math.random());
   
             hold = string.charAt(entity1);
    
             
             character += hold;
             if (ckNumeric){
                   character += numeric.charAt(entity2);
             }
            
             if (ckPunctuation) {
                  character += punctuation.charAt(entity3);
             }
             if (ckUppercaseCharactersStr){
                  character += uppercaseCharactersString.charAt(entity4);
   
             }
              
             password = character;
        }
   
   
        password = password.split('').sort(function () {
             return 0.5 - Math.random()
        }).join('');
        return password.substr(0, len);
   }

