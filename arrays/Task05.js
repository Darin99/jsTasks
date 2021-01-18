function solve(arr) {
    let array = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (element >= array[array.length - 1] || array.length === 0) {
            array.push(element);
        }

    }
    return array;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));