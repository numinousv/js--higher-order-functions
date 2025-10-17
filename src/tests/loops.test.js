import { describe, it, expect } from "vitest";
import {
  forLoopCountToFive,
  whileEvenNumbersUpToTen,
  doWhileAtLeastOnce,
  getNamesFromPersonArrayUsingForOf,
  getFirstPersonKeysUsingForIn,
  nameEmojiPairsNestedLoop,
  sumOfAgesForLoop,
  productUntilFiveWithBreak,
  agesExceptThirteenWithContinue,
  namesReversedOrderWithFor,
  indexOfMaybeCityManualLoop,
  firstPersonOver12ManualFind,
  emojiStringUsingForOf,
  multiplicationTableThreeByThree,
} from "../loops.js";

describe("loops", () => {
  describe("forLoopCountToFive", () => {
    it("should return the numbers 1 to 5", () => {
      expect(forLoopCountToFive()).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("whileEvenNumbersUpToTen", () => {
    it("should return even numbers from 0 to 10", () => {
      expect(whileEvenNumbersUpToTen()).toEqual([0, 2, 4, 6, 8, 10]);
    });
  });

  describe("doWhileAtLeastOnce", () => {
    it("should execute at least once and return [0]", () => {
      expect(doWhileAtLeastOnce()).toEqual([0]);
    });
  });

  describe("getNamesFromPersonArrayUsingForOf", () => {
    it("should return array of person names", () => {
      expect(getNamesFromPersonArrayUsingForOf()).toEqual([
        "John",
        "Jim",
        "Jane",
      ]);
    });
  });

  describe("getFirstPersonKeysUsingForIn", () => {
    it("should return keys of first person object", () => {
      expect(getFirstPersonKeysUsingForIn()).toEqual(["name", "age", "city"]);
    });
  });

  describe("nameEmojiPairsNestedLoop", () => {
    it("should return all combinations of names and emojis", () => {
      const expected = [
        "John-🍿",
        "John-🦫",
        "John-🐿️",
        "John-🚀",
        "Jim-🍿",
        "Jim-🦫",
        "Jim-🐿️",
        "Jim-🚀",
        "Jane-🍿",
        "Jane-🦫",
        "Jane-🐿️",
        "Jane-🚀",
      ];
      expect(nameEmojiPairsNestedLoop()).toEqual(expected);
    });
  });

  describe("sumOfAgesForLoop", () => {
    it("should return sum of all ages", () => {
      expect(sumOfAgesForLoop()).toBe(39); // 12 + 14 + 13
    });
  });

  describe("productUntilFiveWithBreak", () => {
    it("should return product of numbers 1 to 5", () => {
      expect(productUntilFiveWithBreak()).toBe(120); // 1 * 2 * 3 * 4 * 5
    });
  });

  describe("agesExceptThirteenWithContinue", () => {
    it("should return ages excluding 13", () => {
      expect(agesExceptThirteenWithContinue()).toEqual([12, 14]);
    });
  });

  describe("namesReversedOrderWithFor", () => {
    it("should return names in reverse order", () => {
      expect(namesReversedOrderWithFor()).toEqual(["Jane", "Jim", "John"]);
    });
  });

  describe("indexOfMaybeCityManualLoop", () => {
    it("should return index of person with city 'Maybe'", () => {
      expect(indexOfMaybeCityManualLoop()).toBe(1);
    });
  });

  describe("firstPersonOver12ManualFind", () => {
    it("should return first person with age over 12", () => {
      const result = firstPersonOver12ManualFind();
      expect(result).toEqual({
        name: "Jim",
        age: 14,
        city: "Maybe",
      });
    });
  });

  describe("emojiStringUsingForOf", () => {
    it("should return concatenated emoji string", () => {
      expect(emojiStringUsingForOf()).toBe("🍿🦫🐿️🚀");
    });
  });

  describe("multiplicationTableThreeByThree", () => {
    it("should return 3x3 multiplication table", () => {
      const expected = [
        [1, 2, 3],
        [2, 4, 6],
        [3, 6, 9],
      ];
      expect(multiplicationTableThreeByThree()).toEqual(expected);
    });
  });
});
