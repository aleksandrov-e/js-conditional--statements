function fishingBoat(input){
   let buget = Number(input[0]);
   let season = input[1];
   let fishermensCount = Number(input[2]);
   let boatRent = 0;
    
   switch(season){
      case "Spring": boatRent = 3000;
      if(fishermensCount <= 6){
        boatRent *= 0.90;
      }else if(fishermensCount >= 7 && fishermensCount <= 11){
          boatRent *= 0.85;
      }else if(fishermensCount >= 12){
        boatRent *= 0.75;
      }
      break;
      case "Summer": 
      case "Autumn":
      boatRent = 4200;
      if(fishermensCount <= 6){
        boatRent *= 0.90;
      }else if(fishermensCount >= 7 && fishermensCount <= 11){
          boatRent *= 0.85;
      }else if(fishermensCount >= 12){
        boatRent *= 0.75;
      }
      break;
      case "Winter": boatRent = 2600;
      if(fishermensCount <= 6){
        boatRent *= 0.90;
      }else if(fishermensCount >= 7 && fishermensCount <= 11){
          boatRent *= 0.85;
      }else if(fishermensCount >= 12){
        boatRent *= 0.75;
      }
      break;
      default:"error";
   }
   if(buget > boatRent){
     let moneyLeft = buget - boatRent;
     console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
   }else{
      let moneyNeeded = boatRent - buget;
      console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva`)
   }

}
fishingBoat(["3600",

"Autumn",

"6"])