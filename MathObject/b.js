const sqrtOfSum = (numbers) => {
    let sum = 0;
    numbers.forEach((num) => {
        sum += Math.pow(num, 2);
    });
    return Math.sqrt(sum);
};

const arr = [5, 5, 5, 5, 5];
console.log(sqrtOfSum(arr));
