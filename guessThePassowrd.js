function guessThePassword(input){
    let password = "s3cr3t!P@ssw0rd";
    let passwordTry = input[0];
   if(passwordTry === password){
     console.log("Correct passowrd");
   }else{
     console.log("Wrong password")
   }
}
guessThePassword(["qwerty"])