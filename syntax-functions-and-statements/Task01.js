function fruit(a, b, c){

    const nameOfFriut = a;
    let kg = b / 1000;
    let moneyPerKg = c;
    let price = kg * moneyPerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${nameOfFriut}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);