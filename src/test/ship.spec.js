const ship = require("battleships/src/modules/ship.js");

describe("test the ship factory", () => {
  test("check if proper object is returned", () => {
    expect(ship()).toEqual({
    });
  });
});
