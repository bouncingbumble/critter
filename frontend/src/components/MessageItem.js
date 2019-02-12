import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const MessageItem = ({ date, profileImageUrl, text, username, removeMessage, isCorrectUser }) => {
    return (
    
        <div className="">
            <img src={profileImageUrl} alt={username} height="100" width="100" className="timeline-image"></img>
            <Link to ='/'>@{username} &nbsp;</Link>
            <span className="text-muted">
                <Moment className="text-muted" format="Do MMM YYYY">
                    {date}
                </Moment>
            </span>
            <p>{text}</p>
            {isCorrectUser && (
                <a onClick={removeMessage} className="btn btn-danger">Delete</a>
            )}

        </div>
    )
}

export default MessageItem;