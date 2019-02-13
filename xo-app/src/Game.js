import React, { Component } from 'react';
import Cell from './Cell';
import './Game.css';

class Game extends Component {
  constructor(props) {
        super(props);
        this.state = {
            cell:  new Array(9).fill(null),
            xIsNext: 1
        }
        this.winnerCells = [];
      }

  checkRow (a, b, c) {
      if( (this.state.cell[a])&&
          (this.state.cell[b] === this.state.cell[a])&&
          (this.state.cell[c] === this.state.cell[a]))
      {
          this.winnerCells = [a,b,c];
          return true;
      }
      return false;
    } 

  checkWin() {
    return  this.checkRow(0,1,2) ||
            this.checkRow(3,4,5) ||
            this.checkRow(6,7,8) ||
            this.checkRow(0,3,6) ||
            this.checkRow(1,4,7) ||
            this.checkRow(2,5,8) ||
            this.checkRow(0,4,8) ||
            this.checkRow(2,4,6);
  }

  onClick(i) {
    if(this.checkWin())
      return;

    if(this.state.cell[i] != null)
      return;

    this.setState(state => {
      const cell = state.cell.map((item, j) => {
        if (j === i) {
          return (this.state.xIsNext === 0 ? 'o' : 'x');
        } else {
          return item;
        }
      });
      return {
        cell,
        xIsNext: this.state.xIsNext === 0 ? 1 : 0
      };
    });
    
  }

  render() {
    
    this.checkWin();
    let cells = this.state.cell.map( (item, i) => 
            <Cell winner={this.winnerCells.includes(i)} val={this.state.cell[i]} onClick={() => this.onClick(i)}/>
            );
      
    return (
        <div className="Field">
          <div className="Field-row">
            {cells.slice(0,3)}
          </div>
          <div className="Field-row">
            {cells.slice(3,6)}
          </div>
          <div className="Field-row">
            {cells.slice(6,9)}
          </div>
        </div>
    );
  }
}

export default Game;