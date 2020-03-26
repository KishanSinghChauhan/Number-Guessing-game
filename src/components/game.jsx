import React, { Component } from 'react';
import GuessForm from './guessForm';

class Game extends Component {
    constructor(props) {
        super(props)
        const { min, max } = this.props.game

        this.state = {
            randNum: this.randomNumber(min, max),
            guess: "",
            status: "Let's Start",
            showSubmitTemp: true
        }
    }

    hideSubmitTemp() {
        this.setState({ showSubmitTemp: false });
        console.log(this.state.showSubmitTemp, this.state.guess);
    }

    handleSubmit = guess => {
        const { game, onGuess, onLevelUp } = this.props;
        this.setState({ status: this.formatGuessStatus(this.state.randNum, this.state.guess) })
        onGuess(game, guess)
        this.setState({ guess: "" })
        if(parseInt(guess) === this.state.randNum) {
            this.hideSubmitTemp()
            onLevelUp(game)
        }
    }

    handleGuessChange = (event) => {
        this.setState({
            guess: event.target.value
        })
    }

    render() { 
        const { game } = this.props
        const { guess, status, showSubmitTemp } = this.state

        return (
            <div style={{ marginTop: 10 }} className="card">
                <div className="card-header">
                    <h5>Level {game.level} </h5>
                </div>
                <div className="container card-body">
                    <p>Guess the number between {game.min} and {game.max}</p>
                    { showSubmitTemp ?
                        <React.Fragment>
                            < GuessForm onSubmit={this.handleSubmit} guess={guess} onChange={this.handleGuessChange}/>
                        </React.Fragment> : null }
                    <h6 style={{ marginTop: 10 }}>Your Previous Guesses: { game.guesses.map(guess => 
                        <span key={game.level}>{guess} </span>)}
                        <span className={ this.getBatchClasses() }>{status}</span>
                    </h6>
                </div>
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
        classes += this.state.status === "Correct" ? "success" : this.state.status === "Hot" ? "danger" : this.state.status === "Warm" ? "warning" : "info";
        return classes;
    }

    formatGuessStatus(randNum, guess) {
        let diff = Math.abs( randNum - guess ); 
        if ( diff === 0 ) {
            return "Correct";
        }
        else if ( diff > 15 ) {
            return "Cold";
        }
        else if ( diff > 4 && diff <= 15  ) {
            return "Warm";
        }
        else if ( diff >= 1 && diff <= 4  ) {
            return "Hot";
        }
    }
}
 
export default Game;