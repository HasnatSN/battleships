class Gameboard {
  constructor() {
    this.size = 10; // 10x10 to make the grid
  }

  createField() {
    const mainArea = document.querySelector("main");

    for (let i = 0; i < this.size; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      mainArea.appendChild(cell);
    }
  }
}



module.exports = Gameboard;
export {Gameboard}
