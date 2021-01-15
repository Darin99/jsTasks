function solve(str) {

   return result = str.toUpperCase()
    .split(/[\W]+/)
    .filter(w => w.length > 0)
    .join(", ");
}

console.log(solve('Hi, how are you?'));
console.log(solve('hello'));