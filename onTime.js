function onTime(input){  
   let examHour = Number(input[0]);
   let examMin = Number(input[1]);
   let arrivalHour = Number(input[2]);
   let arrivalMin = Number(input[3]);
   let examTime = examHour * 60 + examMin;
   let arrivalTime = arrivalHour * 60 + arrivalMin;

    let diff = arrivalTime - examTime;
    let absDiff = Math.abs(diff);

    if (diff > 0) {
        console.log("Late");
    } else if (absDiff <= 30) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (diff !== 0) {
        let hours = Math.floor(absDiff / 60);
        let minutes = absDiff % 60;

        if (hours > 0) {
            let formattedMinutes = minutes.toString().padStart(2, "0");

            if (diff > 0) {
                console.log(`${hours}:${formattedMinutes} hours after the start`);
            } else {
                console.log(`${hours}:${formattedMinutes} hours before the start`);
            }
        } else {
            if (diff > 0) {
                console.log(`${minutes} minutes after the start`);
            } else {
                console.log(`${minutes} minutes before the start`);
            }
        }
    }
}


onTime(["9",

"30",

"9",

"50"])