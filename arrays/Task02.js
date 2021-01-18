function solve(arr, number) {

    let array = [];
    for (let index = 0; index < arr.length; index += number) {
        array.push(arr[index]);
    }
    return array;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));

console.log(solve(['dsa',
    'asd',
    'test',
    'tset'],
    2
));