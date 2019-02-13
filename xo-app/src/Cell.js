import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
      render() {
        return (
            <div className={this.props.winner? 'Cell Blink' : 'Cell'} onClick={this.props.onClick} >
                {this.props.val}
            </div>
        );
      }
}

export default Cell;