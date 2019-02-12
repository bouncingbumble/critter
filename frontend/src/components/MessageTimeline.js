import React from "react";
import MessageList from  '../containers/MessageList';
import UserProfile from './UserProfile';
import MessageForm from '../containers/MessageForm';

const MessageTimeLine = props => {
return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <UserProfile profileImageUrl={props.profileImageUrl} username={props.username} />   
                </div>
                <div className="col-6">
                    <MessageForm />
                    <MessageList />
                </div>
                <div className="col">
                
                </div>
            </div>
        </div>
    )
}

export default MessageTimeLine;