import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  render() {
    return (
        <div className="Field">
            <div className="Field-row">
                <div className="Field-cell">
                    x
                </div>
                <div className="Field-cell">
                    o
                </div>
                <div className="Field-cell">
                    x
                </div>
            </div>
            <div className="Field-row">
                <div className="Field-cell">
                    x
                </div>
                <div className="Field-cell">
                    o
                </div>
                <div className="Field-cell">
                    x
                </div>
            </div>
            <div className="Field-row">
                <div className="Field-cell">
                    x
                </div>
                <div className="Field-cell">
                    o
                </div>
                <div className="Field-cell">
                    x
                </div>
            </div>
        </div>
    );
  }
}

export default Game;