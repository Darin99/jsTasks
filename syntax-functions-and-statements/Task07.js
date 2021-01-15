function solve(number, com1, com2, com3, com4, com5) {

    let num = +number;

    const array = [com1, com2, com3, com4, com5];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        switch (element) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= num * 0.2;
                break;
        }
        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');