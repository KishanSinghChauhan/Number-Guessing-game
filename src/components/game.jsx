import React, { Component } from 'react';

class Game extends Component {
    render() { 
        return (  
            <div>
                { this.props.children }
                <span className={ this.getBatchClasses() }>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.game) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.game.level) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    randomNumber(min, max) {  
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    getBatchClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.game.score === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { score } = this.props.game;
        return score === 0 ? 'Zero' : score;
    }
}
 
export default Game;