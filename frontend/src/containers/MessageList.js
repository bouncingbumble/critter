import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const { messages, removeMessage, currentUser } = this.props;
        let messageList = messages.map(m => {
            return <MessageItem 
                isCorrectUser={currentUser === m.user._id}
                key={m._id} 
                date ={m.createAt} 
                text={m.message} 
                username={m.user.username} 
                profileImageUrl={m.user.profileImageUrl} 
                removeMessage={removeMessage.bind(this, m.user._id, m._id)}
            />
        })

        return messageList;
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUser: state.currentUser.user.id
    };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList)