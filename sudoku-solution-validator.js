// Sudoku Background

// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)
// Sudoku Solution Validator

// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board) {
  //TODO
  let boardTotal = 0;
  let firstColTotal = [];
  let subGrid = [
    board[0].slice(0, 3),
    board[1].slice(0, 3),
    board[2].slice(0, 3),
  ];

  let subGridTotal = 0;

  for (let s of subGrid) {
    for (let n of s) {
      subGridTotal += n;
    }
  }

  console.log(subGridTotal); // check if top left 3x3 subgrid adds up to 45

  for (let r of board) {
    firstColTotal.push(r[8]);
    for (let num of r) {
      boardTotal += num;
    }
  }

  console.log(firstColTotal);

  let colTotal = firstColTotal.reduce((acc, curVal) => acc + curVal);

  console.log(colTotal); // check if first left column adds up to 45

  console.log(subGrid); // extract of 3x3 subgrid from top left

  if (boardTotal !== 405 || colTotal !== 45 || subGridTotal !== 45) {
    return false;
  } else {
    return true;
  }
}

// Test case

validSolution([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 1, 5, 6, 4, 8, 9, 7],
  [3, 1, 2, 6, 4, 5, 9, 7, 8],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 4, 8, 9, 7, 2, 3, 1],
  [6, 4, 5, 9, 7, 8, 3, 1, 2],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 7, 2, 3, 1, 5, 6, 4],
  [9, 7, 8, 3, 1, 2, 6, 4, 5],
]);
