const Gameboard = require("battleships/src/modules/gameboard.js");

describe("test for the gameboard", () => {
  const gameboard = new Gameboard();

  test("check if the gameboard size is 10", () => {
    expect(gameboard.size).toEqual(10);
  });

  test("")

});
