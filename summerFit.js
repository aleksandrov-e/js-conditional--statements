function summerFit(input){
   let degrees = Number(input[0]);
   let time = input[1];
   let outfit ;
   let shoes;

   if(degrees >= 10 && degrees <= 18){
      if(time === "Morning"){
         outfit = "Sweatshirt";
         shoes = "Sneakers";
      } else if(time ==="Afternoon" || time ==="Evening"){
         outfit = "Shirt";
         shoes = "Moccasins";
      }
   }else if(degrees > 18 && degrees <=24){
       if(time ==="Morning" || time ==="Evening"){
          outfit = "Shirt";
         shoes = "Moccasins";
       }else if(time ==="Afternoon"){
          outfit = "T-shirt";
          shoes = "Sandals";
       }
   }else{
       if(time === "Morning"){
          outfit = "T-shirt";
          shoes = "Sandals";
       }else if(time === "Afternoon"){
          outfit = "Swim suit";
          shoes = "Barefoot";
       }else if(time ==="Evening"){
          outfit = "Shirt";
          shoes = "Moccasins"; 
       }
          
}
console.log(`Its ${degrees}, get your ${outfit} and ${shoes}`);
}
summerFit(["22",

"Afternoon"])