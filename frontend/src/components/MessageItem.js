import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const MessageItem = ({ date, profileImageUrl, text, username }) => {
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
        </div>
    )
}

export default MessageItem;