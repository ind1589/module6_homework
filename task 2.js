function isPrimeOrNot(num){
    if (num > 1000 || num < 0) {
        return "Данные не верны";
    } else if(num === 0 || num === 1) {
        return "Не простое, не составное число";
    } else {
        for (let i=2; i < num; i++){
            if (num % i === 0) {
                return "Составное число";
            }
        }
        return "Простое число";
    }

}

console.log(isPrimeOrNot(1111));
