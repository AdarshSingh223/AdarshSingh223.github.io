// script.js

// Function to create the chessboard
function createChessboard() {
    let board = document.getElementById('chessboard');
    
    // Loop through rows (8 rows for a standard chessboard)
    for (let i = 0; i < 8; i++) {
      // Create a row element
      let row = document.createElement('div');
      row.classList.add('row');
      
      // Loop through columns (8 columns for a standard chessboard)
      for (let j = 0; j < 8; j++) {
        // Create a square element
        let square = document.createElement('div');
        square.classList.add('square');
        
        // Determine the color of the square based on its position
        if ((i + j) % 2 === 0) {
          square.classList.add('white');
        } else {
          square.classList.add('black');
        }
        
        // Append the square to the current row
        row.appendChild(square);
      }
      
      // Append the row to the chessboard
      board.appendChild(row);
    }
  }
  
  // Call the function to create the chessboard when the page loads
  document.addEventListener('DOMContentLoaded', createChessboard);
  