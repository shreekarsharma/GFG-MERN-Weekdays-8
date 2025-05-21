export default function isPrime(n) {
    if (n <= 1) {
        console.log("Not Prime");
        return;
    }
    if (n === 2) {
        console.log("Prime");
        return;
    }
    if (n % 2 === 0) {
        console.log("Not Prime");
        return;
    }

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            console.log("Not Prime");
            return;
        }
    }

    console.log("Prime");
}
