function swimming(input){
    let recordTime = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let swimmerTime = distance * timeForOneMeter;
    let slow = (distance / 15) * 12.5;
    let finalTime = swimmerTime + slow;
    if(finalTime > recordTime){
        console.log(`No he failed!He was ${(finalTime - recordTime).toFixed(2)} seconds slower`)
    }else{
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    }
}
swimming(["55555.67",

"3017",
"5.03"])