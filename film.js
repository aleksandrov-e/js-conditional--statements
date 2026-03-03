function film(input){
   let buget = Number(input[0]);
   let statistAmount = Number(input[1]);
   let clothingPrice = Number(input[2]);
   let decor = buget * 0.10;
   let moneyForClothing = statistAmount * clothingPrice;
   if(statistAmount > 150){
      moneyForClothing *= 0.90;
   }
   let finalPrice = moneyForClothing + decor;
   if(finalPrice > buget){
      console.log("Not enough moeny");
      console.log(`Wingard needs ${finalPrice - buget}`);
   }else if(finalPrice <= buget){
      console.log("Action");
      console.log(`Wingard starts filming with ${buget - finalPrice} leva left`);
   }

}
film(["15437.62",

"186",

"57.99"])