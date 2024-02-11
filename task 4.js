function printNumbers(start, end) {
    let interval = setInterval(function() {
        if (start <= end) {
            console.log(start);
            start++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

printNumbers(5, 15);