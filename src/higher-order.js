import { personArray, emojiArray } from "./data.js";

// här ska allt vara variabler vars värde är returnen från någon av de olika higher order functions
// med undantag för "getObjectFromArray" nederst som redan är en funktion

//personArray
export const namesOnly = personArray.map((item) => item.name);
export const agesOnly = personArray.map((item) => item.age);
export const withoutJim = personArray.filter((item) => item.name !== "Jim");
export const combinedAge = personArray.reduce((acc, item) => acc + item.age, 0);
export const findJane = personArray.find((item) => item.name === "Jane");

export const sortedByAgeFromYoungestToOldest = [...personArray].sort(
  (a, b) => a.age - b.age
);
export const namesByAgeFromOldestToYoungest = [...personArray]
  .sort((a, b) => b.age - a.age)
  .map((item) => item.name);
export const everyoneOver12 = personArray.every((item) => item.age > 12);
export const isAnyoneOver13 = personArray.some((item) => item.age > 13);

export const indexOfMaybe = personArray.findIndex(
  (item) => item.city === "Maybe"
);
export const namesByLastLetter = personArray.reduce((acc, item) => {
  const lastLetter = item.name.charAt(item.name.length - 1);
  acc.push(lastLetter);
  return acc;
}, []);

/* ---------------------------------- */

// emojiArray
export const arrayIncludesSquirel = emojiArray.includes("🐿️");
export const indexOfRocket = emojiArray.indexOf("🚀");

/* ---------------------------------- */

// ska skapa ett objekt innehållande objekten i personArray
const getObjectFromArray = () => {
  const newObject = {};

  personArray.forEach((item) => {
    newObject[item.name.toLowerCase()] = item;
  });
  return newObject;
};

// lämnas orörda. dessa två testar funktionaliteten
export const objectFromArray = getObjectFromArray();
export const janeFromPersonObject = objectFromArray.jane;
