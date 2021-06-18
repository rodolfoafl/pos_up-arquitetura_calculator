import { sum } from "./calculator";

test("test sum operation", () => {
  expect(sum(1, 5)).toBe(6);
  expect(sum(100, 100)).toBe(200);

  expect(sum(100, -25)).toBe(75);
  expect(sum(-25, 50)).toBe(25);

  expect(sum(200)).toBe(200);
  expect(sum()).toBe(0);
});
