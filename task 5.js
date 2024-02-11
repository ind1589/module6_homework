let example = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
};

console.log(example(5, 3));