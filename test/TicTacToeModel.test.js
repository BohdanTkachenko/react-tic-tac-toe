import 'should';
import { TicTacToeModel } from '../app/src/models/TicTacToeModel';

describe('TicTacToe model', () => {
  it('should be able to make a move', () => {
    const model = new TicTacToeModel(3, 3, 3);
    model.move(1, 1).should.eql({ result: -1 });
  });

  it('should be able to win horizontally by X', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(1, 0).should.eql({ result: -1 });
    model.move(0, 0).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({
      result: 1,
      line: [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
    });
  });
  it('should be able to win vertically by X', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(0, 0).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 0).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(2, 0).should.eql({
      result: 1,
      line: [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
    });
  });

  it('should be able to win by X by diag 1', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(0, 0).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(2, 2).should.eql({
      result: 1,
      line: [
        [1, 1],
        [0, 0],
        [2, 2],
      ],
    });
  });

  it('should be able to win by X by diag 2', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(0, 2).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(2, 0).should.eql({
      result: 1,
      line: [
        [2, 0],
        [1, 1],
        [0, 2],
      ],
    });
  });

  it('should be able to win horizontally by O', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(0, 0).should.eql({ result: -1 });
    model.move(1, 0).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(2, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({
      result: 0,
      line: [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
    });
  });

  it('should be able to win vertically by O', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(2, 2).should.eql({ result: -1 });
    model.move(0, 0).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 0).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(2, 0).should.eql({
      result: 0,
      line: [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
    });
  });

  it('should be able to win by O by diag 1', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(2, 1).should.eql({ result: -1 });
    model.move(0, 0).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(2, 2).should.eql({
      result: 0,
      line: [
        [1, 1],
        [0, 0],
        [2, 2],
      ],
    });
  });

  it('should be able to win by O by diag 2', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(2, 1).should.eql({ result: -1 });
    model.move(0, 2).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(2, 0).should.eql({
      result: 0,
      line: [
        [2, 0],
        [1, 1],
        [0, 2],
      ],
    });
  });

  it('should be able to get a draw', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(0, 0).should.eql({ result: -1 });
    model.move(1, 0).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(0, 2).should.eql({ result: -1 });
    model.move(2, 1).should.eql({ result: -1 });
    model.move(2, 2).should.eql({ result: -1 });
    model.move(2, 0).should.eql({ result: 2 });
  });

  it('should be able to win on 5x2 board', () => {
    const model = new TicTacToeModel(2, 5, 5);

    model.move(1, 0).should.eql({ result: -1 });
    model.move(0, 0).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({ result: -1 });
    model.move(0, 2).should.eql({ result: -1 });
    model.move(1, 3).should.eql({ result: -1 });
    model.move(0, 3).should.eql({ result: -1 });
    model.move(1, 4).should.eql({
      result: 1,
      line: [
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ],
    });
  });

  it('should be able to undo move', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(1, 0).should.eql({ result: -1 });
    model.move(0, 0).should.eql({ result: -1 });
    model.undoMove().should.eql({ result: -1 });

    model.field[0][0].should.equal(-1);
    model.moves.should.have.length(1);
  });

  it('should be able to undo move twice', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(1, 0).should.eql({ result: -1 });
    model.move(0, 0).should.eql({ result: -1 });
    model.undoMove().should.eql({ result: -1 });
    model.undoMove().should.eql({ result: -1 });

    model.field[1][0].should.equal(-1);
    model.field[0][0].should.equal(-1);
    model.moves.should.have.length(0);
  });

  it('should be able to undo move after win', () => {
    const model = new TicTacToeModel(3, 3, 3);

    model.move(1, 0).should.eql({ result: -1 });
    model.move(0, 0).should.eql({ result: -1 });
    model.move(1, 1).should.eql({ result: -1 });
    model.move(0, 1).should.eql({ result: -1 });
    model.move(1, 2).should.eql({
      result: 1,
      line: [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
    });
    model.undoMove().should.eql({ result: -1 });

    model.field[1][2].should.equal(-1);
    model.win.should.eql({ result: -1 });
    model.moves.should.have.length(4);
  });

  it('should not be able to make move on the same cell twice', () => {
    const model = new TicTacToeModel(2, 5, 5);

    model.move(1, 0).should.eql({ result: -1 });

    let captured = '';
    try {
      model.move(1, 0);
    } catch (e) {
      captured = e.message;
    }

    captured.should.be.equal('Cannot make a move to 1x0.');
  });

  it('should not be able to undo when there are no moves', () => {
    const model = new TicTacToeModel(3, 3, 3);

    let captured = '';
    try {
      model.undoMove();
    } catch (e) {
      captured = e.message;
    }

    captured.should.be.equal('There are no moves yet made.');
  });
});
