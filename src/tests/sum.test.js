/* eslint-disable no-undef */
// import { describe, expect, test } from "@jest/globals";
const sum = (val1, val2) => {
  return val1 + val2;
};

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
