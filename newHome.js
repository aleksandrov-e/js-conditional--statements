function flowers(input) {
    let flowerType = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0; 

    switch (flowerType) {
        case "Roses":
            price = count * 5;
            if (count > 80) {
                price *= 0.90;
            }
            break;

        case "Dahlias":
            price = count * 3.80;
            if (count > 90) {
                price *= 0.85;
            }
            break;

        case "Tulips":
            price = count * 2.80;
            if (count > 80) {
                price *= 0.85;
            }
            break;

        case "Narcissus":
            price = count * 3;
            if (count < 120) {
                price *= 1.15;
            }
            break;

        case "Gladiolus":
            price = count * 2.50;
            if (count < 80) {
                price *= 1.20;
            }
            break;
    }

    if (budget >= price) {
        let moneyLeft = budget - price;
        console.log(`Hey, you have a great garden with ${count} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let needed = price - budget;
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`);
    }
}
flowers(["Roses",

"55",

"250"])