import React, { Component } from 'react';
import Clock from 'react-live-clock';


const TableBody = props => {

    const date = <Clock format={'DD:MM:YY'} />;
    const time = <Clock format={'HH:mm:ss'} />;

    const rows = props.commentData.map((row, index) => {
        let validComment = row.comment.replace(/(<([^>]+)>)/ig,"");

        return (
            <div className="task" key={index}>
                <div className="name-task">Name: {row.name}</div>
                <div className="task-description">Comment: {validComment}</div>
                <div>
                    <span data-date="date">Date: {date} </span>
                    <span data-time="time"> Time: {time} </span>
                </div>
                <div><button onClick={() => props.removeComment(index)}>Delete</button></div>
            </div>
        );
    });

    return <div>{rows}</div>
}

class Comment extends Component {
    render() {
        const { commentData, removeComment } = this.props;

        return (
            <div>
                <TableBody commentData={commentData} removeComment={removeComment} />
            </div>
        )
    }
}

export default Comment




