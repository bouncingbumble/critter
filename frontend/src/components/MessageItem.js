import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const MessageItem = ({ date, profileImageUrl, text, username, removeMessage, isCorrectUser }) => {
    return (
        <div className='container card message-item' >
            <div className="row">
                <div className="col-1">
                    <img src={profileImageUrl} alt={username} height="50" width="50" className="timeline-image"></img>
                </div>
                <div className="col-11">
                    <div className="card-body">
                        <h5 className="card-title"><Link to ='/'>@{username} &nbsp;</Link></h5>
                        <p>{text}</p>
                        {/* {isCorrectUser && (
                            <a onClick={removeMessage} className="btn btn-danger pull-right">Delete</a>
                        )} */}
                        <a href="#" >Retweet</a>
                        <a href="#" > Favorite</a>
                        <a href="#" > Reply</a>
                        <span className="text-muted float-right">
                            <Moment className="text-muted" format="Do MMM YYYY">
                                {date}
                            </Moment>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageItem;