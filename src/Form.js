import React, { Component } from 'react';



class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            comment: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }

    submitForm = () => {

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, comment} = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>comment</label>
                <textarea
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;

