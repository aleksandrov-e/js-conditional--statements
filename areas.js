function areas(input){
   let figure = input[0]
   let a = Number(input[1]);
   let b = Number(input[2]);
   let area = "";
   
   if (figure == "square"){
      area = a * a;
   }else if(figure == "rectangle"){
      area = a * b;
   }else if (figure == "circle"){
      area = Math.PI * a * a;
   }else if (figure == "triangle"){
      area = a * b;
   }
   console.log(area.toFixed(2))
}
areas(["rectangle", "7", "2.5"])