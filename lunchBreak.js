function lunchBreak(input){
    let filmName = input[0];
    let filmLenght = Number(input[1]);
    let breakLenght = Number(input[2]);
    let lunchTime = breakLenght / 8;
    let relaxTime = breakLenght / 4;
    let timeLeft = breakLenght - (lunchTime + relaxTime);
    let differance = Math.ceil(Math.abs(timeLeft - filmLenght))
    if(timeLeft >= filmLenght){
        console.log(`You have enough time to watch ${filmName} and left with ${differance} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${filmName}, you need ${differance} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",

"48",

"60"])