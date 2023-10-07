// Define the initial puzzle state
let puzzleState = [1, 2, 3, 4, 5, 6, 7, 8, null]; // 1 is the top-left tile, null represents the empty space

// Function to shuffle the puzzle pieces
function shufflePuzzle() {
  for (let i = puzzleState.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [puzzleState[i], puzzleState[j]] = [puzzleState[j], puzzleState[i]];
  }
}

// Function to check if the puzzle is solved
function isPuzzleSolved() {
  return puzzleState.join('') === '12345678null';
}

// Function to check if a move is valid
function isValidMove(clickedIndex, emptyIndex) {
  return (Math.abs(clickedIndex - emptyIndex) === 1 || Math.abs(clickedIndex - emptyIndex) === 3);
}

// Function to handle tile click event
function handlePieceClick(clickedIndex) {
  // Find the index of the empty space
  const emptyIndex = puzzleState.indexOf(null);

  // Check if the clicked tile is adjacent to the empty space
  if (isValidMove(clickedIndex, emptyIndex)) {
    // Swap the positions of the clicked tile and the empty space
    [puzzleState[clickedIndex], puzzleState[emptyIndex]] = [puzzleState[emptyIndex], puzzleState[clickedIndex]];

    // Check if the puzzle is solved
    if (isPuzzleSolved()) {
      alert('Congratulations! You solved the puzzle!');
    }
  }
}

// Initialize and render the puzzle
function initializePuzzle() {
  shufflePuzzle();
}

// Render the puzzle
function renderPuzzle() {
  for (let i = 0; i < puzzleState.length; i++) {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    piece.innerText = puzzleState[i] !== null ? puzzleState[i] : '';
    piece.dataset.index = i;
    piece.addEventListener('click', () => handlePieceClick(i));
    document.getElementById('puzzle-container').appendChild(piece);
  }
}

// Call the initialization and rendering functions
initializePuzzle();
renderPuzzle();
