//Problem 3: Largest prime factor
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

var number = 600851475143;
var largestPrimeFactor = 0;
var nextPrimeFactor = 0;

//function to find next prime factor

function getNextPrimeFactor(currentN, currentLPF) {
  for (var k = currentLPF + 1; k < currentN; k++) {
    if (currentN % k === 0) {
      console.log('number is: ' + currentN + ' and nextPrimeFactor is: ' + k);
      return k;
    }
  }
}

//get starting prime factor
for (var i = 2; i < number; i++) {
  if (600851475143 % i === 0) {
    nextPrimeFactor = i;
    console.log('number is: ' + number + ' and nextPrimeFactor is: ' + i);
    break;
  }
}

//find largest prime factor
for (var j = 3; j < Math.ceil(Math.sqrt(number)); j++) {
  if (number % nextPrimeFactor === 0) {
    //take number and divide by same largestPrimeFactor
    number = number / nextPrimeFactor;
    largestPrimeFactor = number;
    //if it does not divide, move on to nextPrimeFactor
  } else {
    nextPrimeFactor = getNextPrimeFactor(number, nextPrimeFactor);
    //when you run out, you have got to largest prime
  }
}

console.log('largest prime factor of 600851475143 is: ' + largestPrimeFactor);
