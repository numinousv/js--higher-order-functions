import { personArray, emojiArray } from "./data.js";

export function forLoopCountToFive() {
  const result = [];
  for (let i = 1; i <= 5; i++) {
    result.push(i);
  }
  return result;
}

export function whileEvenNumbersUpToTen() {
  // arrayen ska bara innehålla jämna tal
  const result = [];
  let evenCandidate = 0;
  while (evenCandidate <= 10) {
    if (evenCandidate % 2 === 0) {
      result.push(evenCandidate);
    }
    evenCandidate++;
  }
  return result;
}

export function doWhileAtLeastOnce() {
  const result = [];
  let doIdx = 0;
  do {
    result.push(doIdx);
    doIdx++;
  } while (doIdx < 0);
  return result;
}

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

export function getFirstPersonKeysUsingForIn() {
  const result = [];
  for (const key in personArray[0]) {
    result.push(key);
  }
  return result;
}

export function nameEmojiPairsNestedLoop() {
  const result = [];
  for (const person of personArray) {
    for (const emoji of emojiArray) {
      result.push(`${person.name}-${emoji}`);
    }
  }
  return result;
}

export function sumOfAgesForLoop() {
  let total = 0;
  for (let i = 0; i < personArray.length; i++) {
    total += personArray[i].age;
  }
  return total;
}

export function productUntilFiveWithBreak() {
  let product = 1;
  for (let i = 1; i <= 10; i++) {
    if (i > 5) break;
    product *= i;
  }
  return product;
}

export function agesExceptThirteenWithContinue() {
  const result = [];
  for (let i = 0; i < personArray.length; i++) {
    const age = personArray[i].age;
    if (age === 13) continue;
    result.push(age);
  }
  return result;
}

export function namesReversedOrderWithFor() {
  const result = [];
  for (let i = personArray.length - 1; i >= 0; i--) {
    result.push(personArray[i].name);
  }
  return result;
}

export function indexOfMaybeCityManualLoop() {
  let index = -1;
  for (let i = 0; i < personArray.length; i++) {
    if (personArray[i].city === "Maybe") {
      index = i;
      break;
    }
  }
  return index;
}

export function firstPersonOver12ManualFind() {
  let found = null;
  for (const person of personArray) {
    if (person.age > 12) {
      found = person;
      break;
    }
  }
  return found;
}

export function emojiStringUsingForOf() {
  let text = "";
  for (const e of emojiArray) {
    text += e;
  }
  return text;
}

export function multiplicationTableThreeByThree() {
  const table = [];
  for (let row = 1; row <= 3; row++) {
    const currentRow = [];
    for (let col = 1; col <= 3; col++) {
      currentRow.push(row * col);
    }
    table.push(currentRow);
  }
  return table;
}
