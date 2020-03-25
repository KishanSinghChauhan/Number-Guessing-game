import React, { Component } from 'react';
import GuessForm from './guessForm';

class Game extends Component {
    state = { }

    constructor(props) {
        super(props)
        const { min, max } = this.props.game

        this.state = {
            randNum: this.randomNumber(min, max)
        }
    }

    handleSubmit = guess => {
        guess == this.state.randNum ? alert('Correct') : alert('Try Again')
    }

    render() { 
        const { children, onIncrement, onDelete } = this.props

        return (  
            <div>
                { children }{ this.state.randNum }
                < GuessForm onSubmit={this.handleSubmit}/>
                <span className={ this.getBatchClasses() }>{this.formatCount()}</span>
                <button onClick={ () => onIncrement(this.props.game) } className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={ () => onDelete(this.props.game.level) } className="btn btn-danger btn-sm m-2">Delete</button>
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