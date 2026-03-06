function operations(input) {
   let num1 = Number(input[0]);
   let num2 = Number(input[1]);
   let operator = input[2];
   let result;
   let type;

   switch(operator){
      case "+":
         result = num1 + num2;
         break;

      case "-":
         result = num1 - num2;
         break;

      case "*":
         result = num1 * num2;
         break;

      case "/":
         if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            return;
         }
         result = num1 / num2;
         console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
         return;

      case "%":
         if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            return;
         }
         result = num1 % num2;
         console.log(`${num1} % ${num2} = ${result}`);
         return;
   }

   if(result % 2 === 0){
      type = "even";
   } else {
      type = "odd";
   }

   console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`);
}

operations(["10", "0", "%"]);