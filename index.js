let userInput;
let counter = 1;
let finalString = "0 -";

const divisibleToThree = (num) => num % 3 === 0;
const divisibleToFive = (num) => num % 5 === 0;
const divisibleToThreeAndFive = (num) => num % 3 === 0 && num % 5 === 0;

while (userInput > 0) {
    switch (true) {
        case divisibleToThreeAndFive(counter):
            finalString += " FizzBuzz -";
            userInput--;
            counter++;
            break;
        case divisibleToThree(counter):
            finalString += " Fizz -";
            userInput--;
            counter++;
            break;
        case divisibleToFive(counter):
            finalString += " Buzz -";
            userInput--;
            counter++;
            break;
        default:
            finalString += ` ${counter} -`;
            userInput--;
            counter++;
            break;
    }
}

console.log(finalString);
