function journey(input){
  let buget = Number(input[0]);
  let season = input[1];
  let destination;
  let placeToRelax;
  let expenses;

  if(buget <= 100){
    destination = "Bulgaria";
    if(season ==="summer"){
        placeToRelax ="camping";
        expenses = buget * 0.30;
    }else if(season ==="winter"){
        placeToRelax = "hotel";
        expenses = buget * 0.70;
    }
  }else if(buget <= 1000){
     destination = "Balkans";
    if(season ==="summer"){
        placeToRelax ="camping";
        expenses = buget * 0.40;
    }else if(season ==="winter"){
        placeToRelax = "hotel";
        expenses = buget * 0.80;
    }
  }else{
    destination = "Europe";
    placeToRelax = "hotel";
    expenses = buget * 0.90;
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${placeToRelax} - ${expenses}`);
}
journey(["75", "winter"])