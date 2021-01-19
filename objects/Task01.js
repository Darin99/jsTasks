function solution(arr) {

    let result = {};

    for (let index = 0; index < arr.length - 1; index += 2) {

        result[arr[index]] = Number(arr[index + 1]);
    }

    return result;

}

console.log(solution(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));