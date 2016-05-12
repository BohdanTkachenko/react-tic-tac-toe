import React from 'react';
import { TicTacToeModel } from '../models/TicTacToeModel';
import { TicTacToeView } from './TicTacToeView';

export class AppView extends React.Component {
  static propTypes = {
    makeMove: React.PropTypes.func.isRequired,
    options: React.PropTypes.object.isRequired,
    setOptions: React.PropTypes.func.isRequired,
    ticTacToeModel: React.PropTypes.instanceOf(TicTacToeModel).isRequired,
  }

  state = {
    rows: this.props.options.rows,
    cells: this.props.options.cells,
    winCells: this.props.options.winCells,
  };

  setOptions(e) {
    if (e.type === 'keyup' && e.keyCode !== 13) {
      return;
    }

    this.props.setOptions(this.state.rows, this.state.cells, this.state.winCells);

    const state = this.state;
    if (Number(this.state.rows) <= 0) {
      state.rows = this.props.options.rows;
    }

    if (Number(this.state.cells) <= 0) {
      state.cells = this.props.options.cells;
    }

    if (Number(this.state.winCells) <= 0) {
      state.winCells = this.props.options.winCells;
    }

    this.setState(state);
  }

  linkState(name) {
    return {
      value: this.state[name],
      requestChange: (newValue) => {
        const state = this.state;
        state[name] = newValue;

        this.setState(state);
      },
    };
  }

  render() {
    return (
      <div>
        <label>Rows: </label>
        <input
          onKeyUp={::this.setOptions}
          type="number"
          valueLink={this.linkState('rows')}
        />

        <label>Cols: </label>
        <input
          onKeyUp={::this.setOptions}
          type="number"
          valueLink={this.linkState('cells')}
        />

        <label>Win Cells: </label>
        <input
          onKeyUp={::this.setOptions}
          type="number"
          valueLink={this.linkState('winCells')}
        />

        <button onClick={::this.setOptions}>set options</button>

        <TicTacToeView
          makeMove={this.props.makeMove}
          model={this.props.ticTacToeModel}
        />
      </div>
    );
  }
}
