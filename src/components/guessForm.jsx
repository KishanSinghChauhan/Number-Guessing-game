import React, { Component } from 'react';

class GuessForm extends Component {
    render() {
        const { guess, onChange, onSubmit } = this.props
        return (
            <React.Fragment>
                <div>
                    <label>Guess The Number: </label>
                    <input type="text" value={guess} onChange={(event) => onChange(event)} />
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => onSubmit(guess)}>Submit Guess</button>
            </React.Fragment>
        );
    }
}

export default GuessForm;