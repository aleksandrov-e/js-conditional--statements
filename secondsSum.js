function secondSums(input){
   let firstRacer = Number(input[0]);
   let secondRacer = Number(input[1]);
   let thridRacer = Number(input[2]);

   let totalTime = firstRacer + secondRacer + thridRacer;
   let minutes = Math.floor(totalTime / 60);
   let seconds = totalTime % 60;

   if (seconds < 10){
      console.log(`${minutes}:0${seconds}`);
   }else{
      console.log(`${minutes}:${seconds}`);
   }
}
secondSums(["35",

"45",

"44"]);