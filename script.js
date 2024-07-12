document.addEventListener('DOMContentLoaded', function()
{
    const chessboard = document.getElementById('chessboard');
    const boardSize = 8; // 8x8 chessboard
 
    for (let row = 0; row < boardSize; row++)
    {
        for (let col = 0; col < boardSize; col++)
        {
            const square = document.createElement('div');
            square.classList.add('square');
            if ((row + col) % 2 === 0)
            {
                square.classList.add('white');
            }
            else
            {
                square.classList.add('black');
            }
            chessboard.appendChild(square);
        }
    }
});
