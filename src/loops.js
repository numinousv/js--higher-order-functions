import { personArray, emojiArray } from "./data.js";

// export function forLoopCountToFive() {
//  const result = [];
//  return result;
// }

 export function forLoopCountToFive() {
  return Array.from({ length: 5 }, (_, i) => i + 1);
 }


//export function whileEvenNumbersUpToTen() {
  // arrayen ska bara innehålla jämna tal
 // const result = [];
 // let evenCandidate = 0;
//  return result;
//}

export function whileEvenNumbersUpToTen() {
  const result = Array.from({ length: 11 }, (_, i) => i)  // [0, 1, 2, ... 10]
    .filter(n => n % 2 === 0);                            // keep only evens

  return result;
}

export function doWhileAtLeastOnce() {
  const result = [];
  let doIdx = 0;
  return result;
}

// export function getNamesFromPersonArrayUsingForOf() {
//  const result = [];
//  return result;
// }

export function getNamesFromPersonArrayUsingForOf() {
  const result = [];

  for (const person of personArray) {
    result.push(person.name);
  }

  return result;
}



//for in... ger tillbaka keys
// en aray har inte keys, men index
//for of... ger tillbaka värden

// export function getFirstPersonKeysUsingForIn() {
//  const result = [];
//  return result;
// }

export function getFirstPersonKeysUsingForIn() {
  const result = [];

  const firstPerson = personArray[0];

  for (const key in firstPerson) {
    result.push(key);
  }

  return result;
}

export function nameEmojiPairsNestedLoop() {
  const result = [];
  return result;
}

export function sumOfAgesForLoop() {
  let total = 0;
  return total;
}

export function productUntilFiveWithBreak() {
  let product = 1;
  return product;
}

export function agesExceptThirteenWithContinue() {
  const result = [];
  return result;
}

export function namesReversedOrderWithFor() {
  const result = [];
  return result;
}

export function indexOfMaybeCityManualLoop() {
  let index = -1;
  return index;
}

export function firstPersonOver12ManualFind() {
  let found = null;
  return found;
}

export function emojiStringUsingForOf() {
  let text = "";
  return text;
}

export function multiplicationTableThreeByThree() {
  const table = [];
  return table;
}
