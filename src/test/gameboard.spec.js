const gameboard = require("battleships/src/modules/gameboard.js");

describe("test for the gameboard", () => {
  test("is an object returned?", () => {
    expect(gameboard()).toEqual({"object"});
  });
});
