import {capitalize} from "./capitalize.js";

test('test sample', () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

it('space before string', () => {
  expect(capitalize("    skadoosh")).toBe("Skadoosh");
});

it('no edit needed', () => {
  expect(capitalize("Germany")).toEqual("Germany");
});

