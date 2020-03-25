import React, { Component } from 'react';
import Game from './game'

class Games extends Component {
    render() {
        const { onReset, games, onDelete, onIncrement } = this.props;
        return ( 
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                { games.map(game => 
                    <Game key={game.level} onDelete={onDelete} onIncrement={onIncrement} game={game}>
                        <h4>Level {game.level}</h4>
                    </Game>
                )}
            </div>
        );
    }
}

export default Games;