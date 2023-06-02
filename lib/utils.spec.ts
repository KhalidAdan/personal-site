import {
  animationVariants,
  dateHelper,
  getAnimationVariants,
  getRandomValueFromArray,
} from "./utils";

describe("dateHelper", () => {
  it("returns isNew as true when date is within the last 7 days", () => {
    const today = new Date();
    const sixDaysAgo = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000);
    const result = dateHelper(sixDaysAgo);
    expect(result.isNew).toBe(true);
  });

  it("returns isNew as false when date is more than 7 days ago", () => {
    const today = new Date();
    const eightDaysAgo = new Date(today.getTime() - 8 * 24 * 60 * 60 * 1000);
    const result = dateHelper(eightDaysAgo);
    expect(result.isNew).toBe(false);
  });

  it("returns hasBeenReleased as true when date is in the past", () => {
    const today = new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const result = dateHelper(yesterday);
    expect(result.hasBeenReleased).toBe(true);
  });

  it("returns hasBeenReleased as false when date is in the future", () => {
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const result = dateHelper(tomorrow);
    expect(result.hasBeenReleased).toBe(false);
  });
});

describe("getRandomValueFromArray", () => {
  it("returns a value from the array", () => {
    const array = [1, 2, 3, 4, 5];
    const result = getRandomValueFromArray(array);
    expect(array).toContain(result);
  });

  it("returns undefined when the array is empty", () => {
    const array: number[] = [];
    const result = getRandomValueFromArray(array);
    expect(result).toBeUndefined();
  });
});

describe("getAnimationVariants", () => {
  it("returns the correct animation variants", () => {
    const name = "fadeInFromBottom";
    const result = getAnimationVariants(name);
    expect(result).toEqual(animationVariants[name]);
  });
});
