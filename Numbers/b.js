const checkPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPrime = (num) => {
    const result = checkPrime(num);
    if (result === true) console.log(`${num} is a prime number`);
    else console.log(`${num} is not a prime number`);
};

isPrime(30);
