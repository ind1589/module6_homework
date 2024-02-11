let arr = ['a', null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function countEvenOddAndZeroElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else if (typeof arr[i] === 'number' && arr[i] % 2 === 0) {
            evenCount++;
        } else if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
            oddCount++;
        }
    }

    console.log("Количество четных элементов: " + evenCount);
    console.log("Количество нечетных элементов: " + oddCount);
    console.log("Количество нулевых элементов: " + zeroCount);
}


countEvenOddAndZeroElements(arr);
