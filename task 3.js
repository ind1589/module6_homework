function twoSum(num) {
    return function(num2) {
        return num + num2;
    };
}

let result = twoSum(8);
console.log(result(9));