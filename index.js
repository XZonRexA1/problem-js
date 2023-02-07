// PROBLEM 1:
/* Function that takes a positive number as input
and do some mathematical operation and shows the final output;
*/
function mindGame(number) {
  if (number >= 0 && typeof number === "number") {
    const total = (number * 3 + 10) / 2 - 5;
    return total;
  } else {
    return "Input should be a number";
  }
}

// PROBLEM 2:
/*
Function that takes total character in a string and shows output even or odd depending on that string total character.
*/
function evenOdd(str) {
  if (str.length % 2 === 0) {
    return "even";
  } else if (str.length % 2 === 1) {
    return "odd";
  } else {
    return "Input should be a string parameter";
  }
}

// PROBLEM 3:
/*
Function that takes a number as input and Subtract with 7 and after Subtraction if the input value is less then 7 then return if greater than or equal to 7  then multiply by 2.
*/

function isLGSeven(number) {
  const difference = number - 7;
  if (difference < 7 && typeof number === "number") {
    return difference;
  } else if (difference >= 7 && typeof number === "number") {
    return number * 2;
  } else {
    return "Input should be a number";
  }
}

// PROBLEM 4:
/*
Function that takes an input with number inside of an Array and find Bad data(Negative numbers) and return the length of it as an output.
*/

function findingBadData(arr) {
  let arrLengthNegative = [];
  if (typeof arr === "object") {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element < 0) {
        arrLengthNegative.push(element);
      }
    }
  } else {
    return "Input should be an array";
  }
  return arrLengthNegative.length;
}

// PROBLEM 5:
/*
  Function that will convert gems into diamond first it wil take 3 inputs numbers, your 3 friend gems number will be the input,
  every gems have power(21, 32, 43), It means how many Diamond conversion can we made with one gems power, Then marge(add) the total gems to see how many Diamond can we get. If the total diamond numbers are grater then 1000 Double then subtract the total with 2000 after that return the remaining Diamond.
 */

function gemsToDiamond(friendGemsNum1, friendGemsNum2, friendGemsNum3) {
  const gemsPower1 = 21;
  const gemsPower2 = 32;
  const gemsPower3 = 43;
  const totalGems =
    friendGemsNum1 * gemsPower1 +
    friendGemsNum2 * gemsPower2 +
    friendGemsNum3 * gemsPower3;
  const totalDiamond = totalGems;
  if (
    totalDiamond >= 1000 * 2 &&
    typeof friendGemsNum1 === "number" &&
    typeof friendGemsNum2 === "number" &&
    typeof friendGemsNum3 === "number"
  ) {
    return totalDiamond - 2000;
  } else if (
    totalDiamond < 1000 * 2 &&
    typeof friendGemsNum1 === "number" &&
    typeof friendGemsNum2 === "number" &&
    typeof friendGemsNum3 === "number"
  ) {
    return totalDiamond;
  } else {
    return "Input should be numbers";
  }
}
