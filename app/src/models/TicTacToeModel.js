export const PLAYER_TYPES = { O: 0, X: 1 };

export const CELL_TYPES = {
  EMPTY: -1,
  O: 0,
  X: 1,
};

export const RESULT_TYPES = {
  INPROGRESS: -1,
  O: 0,
  X: 1,
  DRAW: 2,
};

export class TicTacToeModel {
  constructor(rows, cells, winCells) {
    this.rows = rows;
    this.cells = cells;
    this.winCells = winCells;

    this.currentPlayer = PLAYER_TYPES.X;
    this.win = { result: RESULT_TYPES.INPROGRESS };
    this.moves = [];
    this.field = [];

    for (let row = 0; row < rows; row++) {
      this.field[row] = [];

      for (let cell = 0; cell < cells; cell++) {
        this.field[row][cell] = CELL_TYPES.EMPTY;
      }
    }
  }

  canMakeMove(row, cell) {
    row = Number(row);
    cell = Number(cell);

    if (Object.values(PLAYER_TYPES).indexOf(this.currentPlayer) === -1) {
      return false;
    }

    if (isNaN(row) || row < 0 || row >= this.rows || isNaN(cell) || cell < 0 || cell > this.cells) {
      return false;
    }

    if (this.win.result !== RESULT_TYPES.INPROGRESS) {
      return false;
    }

    if (this.moves.length && this.getLastMove().player === this.currentPlayer) {
      return false;
    }

    return this.field[row][cell] === CELL_TYPES.EMPTY;
  }

  checkForWinLine(pos, max, value) {
    let start = pos;
    let end = pos;

    for (let i = pos - 1; i >= 0; i--) {
      if (value(i) === this.currentPlayer) {
        start = i;
      } else {
        break;
      }
    }

    for (let i = pos + 1; i < max; i++) {
      if (value(i) === this.currentPlayer) {
        end = i;
      } else {
        break;
      }
    }

    return { start, end };
  }

  checkForWinDiag1(row, cell) {
    const line = [];
    let i;
    let j;

    i = row - 1;
    j = cell - 1;
    while (i >= 0 && j >= 0) {
      if (this.field[i][j] === this.currentPlayer) {
        line.push([i, j]);
      } else {
        break;
      }

      i--;
      j--;
    }

    line.push([row, cell]);

    i = row + 1;
    j = cell + 1;
    while (i < this.row && j < this.rows) {
      if (this.field[i][j] === this.currentPlayer) {
        line.push([i, j]);
      } else {
        break;
      }

      i++;
      j++;
    }

    return line;
  }

  checkForWinDiag2(row, cell) {
    const line = [];
    let i;
    let j;

    i = row + 1;
    j = cell - 1;
    while (i < this.rows && j >= 0) {
      if (this.field[i][j] === this.currentPlayer) {
        line.push([i, j]);
      } else {
        break;
      }

      i++;
      j--;
    }

    line.push([row, cell]);

    i = row - 1;
    j = cell + 1;
    while (i >= 0 && j < this.cells) {
      if (this.field[i][j] === this.currentPlayer) {
        line.push([i, j]);
      } else {
        break;
      }

      i--;
      j++;
    }

    return line;
  }

  checkForWin(row, cell) {
    const rangeToArr = (value, { start, end }) => {
      const result = [];

      for (let i = start; i <= end; i++) {
        result.push(value(i));
      }

      return result;
    };

    const results = [
      rangeToArr(i => [row, i], this.checkForWinLine(cell, this.cells, i => this.field[row][i])),
      rangeToArr(i => [i, cell], this.checkForWinLine(row, this.rows, i => this.field[i][cell])),
      this.checkForWinDiag1(row, cell),
      this.checkForWinDiag2(row, cell),
    ];

    for (const result of results) {
      if (result.length >= this.winCells) {
        return {
          result: this.currentPlayer,
          line: result,
        };
      }
    }

    if (this.moves.length === (this.rows * this.cells)) {
      return { result: RESULT_TYPES.DRAW };
    }

    return { result: RESULT_TYPES.INPROGRESS };
  }

  isWinCell(i, j) {
    if (this.win.result !== RESULT_TYPES.X && this.win.result !== RESULT_TYPES.O) {
      return false;
    }

    for (const [row, cell] of this.win.line) {
      if (row === i && cell === j) {
        return true;
      }
    }

    return false;
  }

  reversePlayer(player) {
    return player === PLAYER_TYPES.X ? PLAYER_TYPES.O : PLAYER_TYPES.X;
  }

  getLastMove() {
    if (!this.moves.length) {
      throw new Error('There are no moves yet made.');
    }

    return this.moves[this.moves.length - 1];
  }

  undoMove() {
    let lastMove = this.getLastMove();

    this.currentPlayer = this.reversePlayer(this.currentPlayer);
    this.field[lastMove.row][lastMove.cell] = CELL_TYPES.EMPTY;
    this.moves.splice(-1);

    if (this.moves.length) {
      lastMove = this.getLastMove();
      this.win = lastMove.win;
    } else {
      this.win = { result: RESULT_TYPES.INPROGRESS };
    }

    return this.win;
  }

  move(row, cell) {
    row = Number(row);
    cell = Number(cell);

    if (!this.canMakeMove(row, cell)) {
      throw new Error(`Cannot make a move to ${row}x${cell}.`);
    }

    this.moves.push({ row, cell, player: this.currentPlayer });
    this.field[row][cell] = this.currentPlayer;
    this.win = this.checkForWin(row, cell);
    this.getLastMove().win = this.win;
    this.currentPlayer = this.reversePlayer(this.currentPlayer);

    return this.win;
  }
}
