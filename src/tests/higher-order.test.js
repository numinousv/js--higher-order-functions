import { describe, it, expect } from "vitest";
import {
  namesOnly,
  agesOnly,
  withoutJim,
  combinedAge,
  findJane,
  sortedByAgeFromYoungestToOldest,
  namesByAgeFromOldestToYoungest,
  everyoneOver12,
  isAnyoneOver13,
  arrayIncludesSquirel,
  indexOfMaybe,
  indexOfRocket,
  namesByLastLetter,
  objectFromArray,
  janeFromPersonObject,
} from "../higher-order";

describe("higher order", () => {
  it("should return the names only", () => {
    expect(namesOnly).toEqual(["John", "Jim", "Jane"]);
  });

  it("should not include element with index 1 (Jim)", () => {
    expect(withoutJim).toEqual([
      {
        name: "John",
        age: 12,
        city: "Yes",
      },
      {
        name: "Jane",
        age: 13,
        city: "No",
      },
    ]);
  });

  it("should return the combined age", () => {
    expect(combinedAge).toBe(39);
  });

  it("should return the ages only", () => {
    expect(agesOnly).toEqual([12, 14, 13]);
  });

  it("should find Jane", () => {
    expect(findJane).toEqual({ name: "Jane", age: 13, city: "No" });
  });

  it("should sort by age from youngest to oldest", () => {
    expect(sortedByAgeFromYoungestToOldest.map((p) => p.name)).toEqual([
      "John",
      "Jane",
      "Jim",
    ]);
  });

  it("should list names by age from oldest to youngest", () => {
    expect(namesByAgeFromOldestToYoungest).toEqual(["Jim", "Jane", "John"]);
  });

  it("should check if everyone is over 12 (false)", () => {
    expect(everyoneOver12).toBe(false);
  });

  it("should check if anyone is over 13 (true)", () => {
    expect(isAnyoneOver13).toBe(true);
  });

  it("should include the squirrel emoji", () => {
    expect(arrayIncludesSquirel).toBe(true);
  });

  it("should find index of Maybe city in personArray", () => {
    expect(indexOfMaybe).toBe(1);
  });

  it("should find index of rocket emoji", () => {
    expect(indexOfRocket).toBe(3);
  });

  it("should produce array of last letters of names", () => {
    expect(namesByLastLetter).toEqual(["n", "m", "e"]);
  });

  it("should produce object from array", () => {
    expect(objectFromArray).toEqual({
      john: { name: "John", age: 12, city: "Yes" },
      jim: { name: "Jim", age: 14, city: "Maybe" },
      jane: { name: "Jane", age: 13, city: "No" },
    });
  });

  it("should find Jane from object", () => {
    expect(janeFromPersonObject).toEqual({ name: "Jane", age: 13, city: "No" });
  });
});
