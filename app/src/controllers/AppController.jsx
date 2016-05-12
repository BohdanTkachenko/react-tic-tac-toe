import React from 'react';
import { TicTacToeModel } from '../models/TicTacToeModel';
import { AppView } from '../views/AppView';

export class AppController extends React.Component {
  componentWillMount() {
    this.options = {};
  }

  setOptions(rows, cells, winCells) {
    this.options = { rows, cells, winCells };
  }

  set options({ rows, cells, winCells } = {}) {
    rows = Number(rows);
    cells = Number(cells);
    winCells = Number(winCells);

    this._options = {
      rows: rows > 0 ? rows : 3,
      cells: cells > 0 ? cells : 3,
      winCells: winCells > 0 ? winCells : 3,
    };

    this.ticTacToeModel = new TicTacToeModel(
      this._options.rows,
      this._options.cells,
      this._options.winCells
    );

    this.forceUpdate();
  }

  makeMove(i, j) {
    // if (this.clickTimeout) {
    //   clearTimeout(this.clickTimeout);
    //   this.clickTimeout = null;
    //   this.ticTacToeModel.undoMove();
    //   this.forceUpdate();
    //
    //   return;
    // }

    if (!this.ticTacToeModel.canMakeMove(i, j)) {
      return;
    }

    this.ticTacToeModel.move(i, j);
    this.forceUpdate();

    // this.clickTimeout = setTimeout(() => {
    //   this.clickTimeout = null;
    // }, 5 * 1000);
  }

  render() {
    return (
      <AppView
        makeMove={::this.makeMove}
        onClick={this.onClick}
        options={this._options}
        setOptions={::this.setOptions}
        ticTacToeModel={this.ticTacToeModel}
      />
    );
  }
}
