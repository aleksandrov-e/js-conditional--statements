function toyStore(input){
   let excursionPrice = Number(input[0]);
   let puzzleAmount = Number(input[1]);
   let dollsAmount = Number(input[2]);
   let teddyBears = Number(input[3]);
   let minions = Number(input[4]);
   let trucks = Number(input[5]);

   let toys = puzzleAmount + dollsAmount + teddyBears + minions + trucks;

   let priceToys = puzzleAmount * 2.60 +
                   dollsAmount * 3 +
                   teddyBears * 4.10 +
                   minions * 8.20 +
                   trucks * 2;

   let discount = 0;

   if(toys >= 50){
      discount = priceToys * 0.25;
   }

   let finalPrice = priceToys - discount;
   let rent = finalPrice * 0.10;
   let moneyLeft = finalPrice - rent;

   if(moneyLeft >= excursionPrice){
      console.log(`Yes! ${(moneyLeft - excursionPrice).toFixed(2)} lv left.`);
   }else {
      console.log(`Not enough money! ${(excursionPrice - moneyLeft).toFixed(2)} lv needed.`);
   }
}

toyStore(["40.8","20","25","30","50","10"]);