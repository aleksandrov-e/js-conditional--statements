function shopping(input){
   let buget = Number(input[0]);
   let videocardsAmount = Number(input[1]);
   let processorsAmount = Number(input[2]);
   let ramAmount = Number(input[3]);

   let videoCardPrice = videocardsAmount * 250;
   let processorsPrice = processorsAmount * (videoCardPrice * 0.35)
   let ramPrice = ramAmount * (videoCardPrice * 0.10)

   let finalPrice = videoCardPrice + processorsPrice + ramPrice;

   if(videocardsAmount > processorsAmount){
      finalPrice *= 0.85
   }
   
   if(buget > finalPrice){
      console.log(`You have ${buget-finalPrice} leva left!`)
   }else{
      console.log(`Not enough money! You need ${finalPrice-buget} leva more`)
   }

}
shopping(["900",

"2",

"1",

"3"])