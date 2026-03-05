function cinema(input){
   let projectionType = input[0];
   let rows = Number(input[1]);
   let colums = Number(input[2]);
   let price = 0;
   let seats = rows * colums;
   switch(projectionType){
      case "Premiere" : price = seats * 12.00;
      break;
      case "Normal" : price = seats * 7.50;
      break;
      case "Discount" : price = seats * 5.00;
      break;
      default: console.log("error");

   }
   console.log(`${price.toFixed(2)} leva.`);
}
cinema(["Normal", "21", "13"])