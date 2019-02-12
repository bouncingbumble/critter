import React from "react";
import MessageList from  '../containers/MessageList';
import UserProfile from './UserProfile';

const MessageTimeLine = props => {
    return (
        <div className="row">
            <UserProfile profileImageUrl={props.profileImageUrl} username={props.username} />
            <MessageList />
        </div>
    )
}

export default MessageTimeLine;