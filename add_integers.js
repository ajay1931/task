// Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum. 

let sumIntegers = (num1, num2) => {
    if (num1 === num2) {
        let sum = num1 * 2 + num2;
        console.log(sum);
    } else {
        console.log("numbers are not equal");
    }
}
sumIntegers(6,6)
sumIntegers(4,3)