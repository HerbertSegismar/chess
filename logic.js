const gameboard = document.getElementById('gameboard');
const width = 8;

const startPieces = [
    Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook,
    Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
    ...Array(width).fill(null),
    ...Array(width).fill(null),
    ...Array(width).fill(null),
    ...Array(width).fill(null),
    Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
    Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook
]

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
    square.setAttribute('square-id', index);

    gameboard.appendChild(square);
  });
}

createBoard();