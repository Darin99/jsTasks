function solution(input) {

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power);

        let result;
        for (let index = 0; index < engines.length; index++) {
            if (engines[index].power >= power) {
                result = engines[index];
                break;
            }

        }
        return result;
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color
        }
    }

    function getWheels(wheelSize) {
        let result =
            Math.floor(wheelSize) % 2 === 0 ?
                Math.floor(wheelSize) - 1 :
                Math.floor(wheelSize);

        return [result, result, result, result];
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)

    }
}

console.log(solution({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));