import React, { Component } from 'react';

class GuessForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            guess: ""
        }
    }

    handleGuessChange = (event) => {
        this.setState({
            guess: event.target.value
        })
    }

    render() {
        const { guess } = this.state
        return ( 
            <React.Fragment>
                <div>
                    <label>Guess The Number</label>
                    <input type="text" value={guess} onChange={this.handleGuessChange} />
                </div>
                <button onClick={() => this.props.onSubmit(this.state.guess)}>Submit Guess</button>
            </React.Fragment>
        );
    }
}
 
export default GuessForm;