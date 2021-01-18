function solve(arr) {

    let array = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        switch (element) {
            case 'add':
                array.push(1 + index);
                break;
            default:
                array.pop();
                break;
        }
    }

    if (array.length == 0) {
        return 'Empty';
    } else {
        return array.join('\r\n');
    }
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));

console.log(solve(['remove',
    'remove',
    'remove']
));