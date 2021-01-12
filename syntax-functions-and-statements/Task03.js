function solve(number){
    let str = number.toString();
    let sum = 0;

    let isSame = true;

    for (let i = 0; i < str.length; i++) {   
        if(str[i] != str[i + 1] && str[i + 1] != undefined){
            isSame = false;
        }
        sum += Number(str[i]); 
    }
    console.log(isSame);
    console.log(sum);
}

solve(2222222);