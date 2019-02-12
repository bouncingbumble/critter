import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const MessageItem = ({ date, profileImageUrl, text, username, removeMessage, isCorrectUser }) => {
    return (
        <div className='container' >
            <div className="card">
                <div className="card-body">
                <img src={profileImageUrl} alt={username} height="100" width="100" className="timeline-image"></img>
                <h5 className="card-title"><Link to ='/'>@{username} &nbsp;</Link></h5>
                <p>{text}</p>
                {/* {isCorrectUser && (
                    <a onClick={removeMessage} className="btn btn-danger pull-right">Delete</a>
                )} */}
                <span className="text-muted pull-right">
                    <Moment className="text-muted" format="Do MMM YYYY">
                        {date}
                    </Moment>
                </span>
                <a href="#" >Retweet</a>
                <a href="#" > Favorite</a>
                <a href="#" > Reply</a>
                </div>
            </div>
        </div>
    )
}

export default MessageItem;