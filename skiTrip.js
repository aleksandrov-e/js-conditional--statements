function skiTrip(input){
   let days = Number(input[0]);
   let roomType = input[1];
   let rate = input[2];
   let nightPrice = 0;
   let nights = days - 1;
   
   switch(roomType){
      case "room for one person" : nightPrice = 18.00;
      break;
      case "apartment" : nightPrice = 25.00;
      break;
      case "president apartment" : nightPrice = 35.00;
      break;
   }
   let finalPrice = nights * nightPrice;

   if(roomType === "apartment"){
      if(days > 15){
         finalPrice *= 0.50;
      }else if(days >= 10){
         finalPrice *= 0.65;
      }else{
         finalPrice *= 0.70;
      }
   }else if(roomType === "president apartment"){
      if(days > 15){
         finalPrice *= 0.80;
      }else if(days >= 10){
         finalPrice *= 0.85;
      }else{
         finalPrice *= 0.90;
      }
   }
    if(rate ==="positive"){
        finalPrice = finalPrice + (finalPrice * 0.25);
    }else if(rate ==="negative"){
        finalPrice = finalPrice - (finalPrice * 0.10);
    }


   console.log(finalPrice.toFixed(2));

}
skiTrip(["12", "room for one person", "positive"])