import React from "react";
import MessageList from  '../containers/MessageList';
import UserProfile from './UserProfile';
import MessageForm from '../containers/MessageForm';

const MessageTimeLine = props => {
return (
    <div className="row">
        <div className="col-1">
        </div>
        <div className="col-2">
            <UserProfile profileImageUrl={props.profileImageUrl} username={props.username} />   
        </div>
        <div className="col-1">
        </div>
        <div className="col-4">
            <MessageForm />
            <MessageList />
        </div>
    </div>
    )
}

export default MessageTimeLine;