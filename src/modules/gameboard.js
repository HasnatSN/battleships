class Gameboard {
  constructor() {
    this.size = 10; // 10x10 to make the grid
  }

  createField() {
    const mainArea = document.querySelector("main");
    const field = document.createElement("div");
    field.classList.add("grid");
    mainArea.appendChild(field);

    for (let i = 0; i < this.size ** 2; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-index", i);
      field.appendChild(cell);
    }
  }

}

module.exports = { Gameboard };
