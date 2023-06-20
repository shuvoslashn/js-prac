//Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations

const sqrtOfSum = (numbers) => {
    const sum = numbers.reduce((acc, cValue) => acc + cValue, 0);
    return Math.sqrt(sum);
};

const arr = [5, 5, 5, 5, 5];
console.log(sqrtOfSum(arr));
