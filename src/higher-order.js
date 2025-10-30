import { personArray, emojiArray } from "./data.js";

// här ska allt vara variabler vars värde är returnen från någon av de olika higher order functions
// med undantag för "getObjectFromArray" nederst som redan är en funktion

//personArray
//fuckedupshit testing lol fuckkkk
export const namesOnly = personArray.map ( person ) => person.name);
export const agesOnly = personArray.map(Person) => person.age);
export const withoutJim = withoutJim = personArray.filter (person => person.name !== "Jim");
export const combinedAge = personArray.reduce((person, total) => total + person.age, 0);
export const findJane = personArray.find(person) => person.name === "Jane");

export const sortedByAgeFromYoungestToOldest = [ ...personArray ].sort((a, b) => b.age - a.age);
export const namesByAgeFromOldestToYoungest;
export const everyoneOver12;
export const isAnyoneOver13;

export const indexOfMaybe;
export const namesByLastLetter;

/* ---------------------------------- */

// emojiArray
export const arrayIncludesSquirel = emojiArray.includes("🦫");
export const indexOfRocket = emojiArray.indexOf("🚀");

/* ---------------------------------- */

// ska skapa ett objekt innehållande objekten i personArray
const getObjectFromArray = () => {
  const newObject = {};
  return newObject;
};

// lämnas orörda. dessa två testar funktionaliteten
export const objectFromArray = getObjectFromArray();
export const janeFromPersonObject = objectFromArray.jane;

// aaa
//aaaaadasdasdasdads
//testa