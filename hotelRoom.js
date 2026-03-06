function hotelRoom(input){
   let month = input[0];
   let nightCount = Number(input[1]);
   let apartmentPrice = 0;
   let studioPrice = 0;
   
   if(month === "May" || month === "October"){
      apartmentPrice = 65;
      studioPrice = 50;
      if(nightCount > 14){
        apartmentPrice *= 0.90;
        studioPrice *= 0.70;
      } else if(nightCount > 7){
        studioPrice *= 0.95;
      }
   } else if(month === "June" || month === "September"){
      apartmentPrice = 68.70;
      studioPrice = 75.20;
      if(nightCount > 14){
        apartmentPrice *= 0.90;
        studioPrice *= 0.80;
      }
   } else if(month === "July" || month === "August"){
      apartmentPrice = 77;
      studioPrice = 76;
      if(nightCount > 14){
        apartmentPrice *= 0.90;
      }
   }

   console.log(`Apartment: ${(nightCount * apartmentPrice).toFixed(2)} lv.`);
   console.log(`Studio: ${(nightCount * studioPrice).toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);