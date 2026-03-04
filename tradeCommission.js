function tradeCommission(input){
   let city = input[0];
   let sales = Number(input[1]);
   let commission = 0;
   let valid = true;

   switch(city){
      case "Sofia": if(sales >= 0 && sales <= 500){
        commission = 0.05;
      }else if(sales > 500 && sales <= 1000){
        commission = 0.07;
      }else if(sales > 1000 && sales <= 10000){
        commission = 0.08;
      }else{
        commission = 0.12
      }
        break;
      case "Varna": if(sales >= 0 && sales <= 500){
        commission = 0.045;
      }else if(sales > 500 && sales <= 1000){
        commission = 0.075;
      }else if(sales > 1000 && sales <= 10000){
        commission = 0.10;
      }else{
        commission = 0.13
      }
        break;
      case "Plovdiv": if(sales >= 0 && sales <= 500){
        commission = 0.055;
      }else if(sales > 500 && sales <= 1000){
        commission = 0.08;
      }else if(sales > 1000 && sales <= 10000){
        commission = 0.12;
      }else{
        commission = 0.145
      }
      default: valid = false;
        break;
   }
    if(valid){
       let totalCommission = sales * commission;
       console.log(totalCommission.toFixed(2))
    }else{
        console.log("error");
    }
}
tradeCommission(["Varna", "3874.50"])