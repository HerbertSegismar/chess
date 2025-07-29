const gameboard = document.getElementById("gameboard");
const width = 8;

const startPieces = [
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
  Bishop,
  Knight,
  Rook,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  ...Array(width).fill(null),
  ...Array(width).fill(null),
  ...Array(width).fill(null),
  ...Array(width).fill(null),
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Pawn,
  Rook,
  Knight,
  Bishop,
  Queen,
  King,
  Bishop,
  Knight,
  Rook,
];

function createBoard() {
  startPieces.forEach((startPiece, index) => {
    const square = document.createElement("div");
    square.classList.add("square");

    // Determine square color based on position
    const row = Math.floor(index / 8);
    const col = index % 8;
    const isDark = (row + col) % 2 !== 0;

    square.classList.add(isDark ? "dark" : "light");
    square.innerHTML = startPiece;
    square.setAttribute("square-id", index);
    square.firstChild?.setAttribute("draggable", true);

    {
      index >= 48
        ? square.firstChild.firstChild.classList.add("white")
        : index <= 15
        ? square.firstChild.firstChild.classList.add("black")
        : null;
    }
    gameboard.append(square);
  });
}

createBoard();

const allSquares = document.querySelectorAll("#gameboard .square");

allSquares.forEach((square) => {
  square.addEventListener("dragstart", dragStart);
});

function dragStart(e) {
  console.log(e.target.parentNode.getAttribute("square-id"));
}