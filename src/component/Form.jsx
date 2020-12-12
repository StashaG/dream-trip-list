import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            trip: ''
        };
        this.state = this.initialState;
}

handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
       [name]: value
    });
}

onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
}

render() {
    const { name, trip } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Trip</label>
                <input 
                    type="text"
                    name="trip"
                    id="trip"
                    value={trip}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;