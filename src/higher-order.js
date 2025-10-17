import { personArray, emojiArray } from "./data.js";

// här ska allt vara variabler vars värde är returnen från någon av de olika higher order functions
// med undantag för "getObjectFromArray" nederst som redan är en funktion

//personArray
export const namesOnly;
export const agesOnly;
export const withoutJim;
export const combinedAge;
export const findJane;

export const sortedByAgeFromYoungestToOldest;
export const namesByAgeFromOldestToYoungest;
export const everyoneOver12;
export const isAnyoneOver13;

export const indexOfMaybe;
export const namesByLastLetter;

/* ---------------------------------- */

// emojiArray
export const arrayIncludesSquirel;
export const indexOfRocket;

/* ---------------------------------- */

// ska skapa ett objekt innehållande objekten i personArray
const getObjectFromArray = () => {
  const newObject = {};
  return newObject;
};

// lämnas orörda. dessa två testar funktionaliteten
export const objectFromArray = getObjectFromArray();
export const janeFromPersonObject = objectFromArray.jane;
