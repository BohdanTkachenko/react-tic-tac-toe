import React from 'react';
import classNames from 'classnames';
import { PLAYER_TYPES, RESULT_TYPES, CELL_TYPES, TicTacToeModel } from '../models/TicTacToeModel';

export class TicTacToeView extends React.Component {
  static propTypes = {
    makeMove: React.PropTypes.func.isRequired,
    model: React.PropTypes.instanceOf(TicTacToeModel).isRequired,
  }

  getPlayerDisplayName(player) {
    return player === PLAYER_TYPES.O ? 'O' : 'X';
  }

  getStatus() {
    if (this.props.model.win.result === RESULT_TYPES.INPROGRESS) {
      return `Player ${this.getPlayerDisplayName(this.props.model.currentPlayer)} move`;
    }

    if (this.props.model.win.result === RESULT_TYPES.DRAW) {
      return 'Draw';
    }

    return `Winner: Player ${this.getPlayerDisplayName(this.props.model.win.result)}`;
  }

  makeMove(i, j) {
    return () => this.props.makeMove(i, j);
  }

  render() {
    return (
      <div
        className="tic-tac-toe"
        style={{
          width: 85 * this.props.model.cells,
        }}
      >
        <div className="status">
          {this.getStatus()}
        </div>

        {this.props.model.field.map((row, i) => (
          <div
            className="tic-tac-toe-row"
            key={`tic-tac-toe-${i}`}
          >
            {row.map((cell, j) => (
              <div
                className={classNames('tic-tac-toe-cell', {
                  'tic-tac-toe-cell-can-move': this.props.model.canMakeMove(i, j),
                  'tic-tac-toe-cell-empty': cell === CELL_TYPES.EMPTY,
                  'tic-tac-toe-cell-o': cell === CELL_TYPES.O,
                  'tic-tac-toe-cell-x': cell === CELL_TYPES.X,
                  'tic-tac-toe-cell-win': this.props.model.isWinCell(i, j),
                  'tic-tac-toe-cell-draw': this.props.model.win.result === RESULT_TYPES.DRAW,
                })}
                key={`tic-tac-toe-${i}-${j}`}
                onClick={this.makeMove(i, j)}
              ></div>
            ))}

            <div className="clear"></div>
          </div>
        ))}
      </div>
    );
  }
}
