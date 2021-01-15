function solve(speed, place) {

    let limit;

    switch (place) {
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }

    const speeding = speed - limit;


    if (speeding <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    }

    let status;


    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding > 20 && speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));