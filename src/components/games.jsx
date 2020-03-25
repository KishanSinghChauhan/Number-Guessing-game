import React, { Component } from 'react';
import Game from './game'

class Games extends Component {
    render() {
        const { games, onReset, onLevelUp } = this.props;
        return ( 
            <div>
                { games.map(game => 
                    <Game key={game.level} onReset={onReset} game={game} onLevelUp={onLevelUp} />
                )}
            </div>
        );
    }
}

export default Games;