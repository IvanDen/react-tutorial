import React, { Component } from 'react';
import Comment from './Table';
import Form from './Form';
import Clock from 'react-live-clock';



class App extends Component {
    state = {
        comments: [],
        date: [],
        time: [],
    };

    componentWillMount() {
        localStorage.getItem('comments') && this.setState({
            comments: JSON.parse(localStorage.getItem('comments')),
            isLoading: false
        });
        localStorage.getItem('date') && this.setState({
            date: JSON.parse(localStorage.getItem('date')),
            isLoading: false
        });
        localStorage.getItem('time') && this.setState({
            time: JSON.parse(localStorage.getItem('time')),
            isLoading: false
        });
    }

    componentDidMount() {
        if (!localStorage.getItem('comments')){
            this.fetchData();
        }
        else {
            console.log('Using date from LocalStorage.')
        }
    }

    fetchData(){

    }

    removeComment = index => {
        const {comments} = this.state;

        this.setState({
            comments: comments.filter((character, i) => {
                return i !== index
            }),
        });
    }

    handleSubmit = commentBlock => {

        const {date, time} = this.state;

        this.setState({
            comments: [...this.state.comments, commentBlock],
            date: [...this.state.date, <Clock format={'DD:MM:YY'} />],
            time: [...this.state.time, <Clock format={'HH:mm:ss'} />],
        });
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('comments', JSON.stringify(nextState.comments));
        localStorage.setItem('date', JSON.stringify(nextState.date));
        localStorage.setItem('time', JSON.stringify(nextState.time));
    }

    render() {
        const {comments} = this.state;

        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add your comment and your name.</p>
                <Comment
                    commentData={comments}
                    removeComment={this.removeComment}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}



export default App




