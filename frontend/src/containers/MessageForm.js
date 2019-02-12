import React, { Component } from "react";
import { connect } from "react-redux";
import { postMessage } from "../store/actions/messages";

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }

    handleNewMessage = event => {
        event.preventDefault();
        this.props.postMessage(this.state.message);
        this.setState({message: ""});
        this.props.history.push("/");
    }

    render(){
        return (
            <form onSubmit={this.handleNewMessage} action="" className="form-group">
                {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors.message}</div>
                )}
                <input type="text" className="form-control" placeholder="Mark are you praying?" value={this.state.message} onChange={e => this.setState({ message: e.target.value})}/>
                <button className="btn btn-primary" type="submit">Tweet!</button>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        errors: state.errors,

    }
}

export default connect(mapStateToProps, { postMessage })(MessageForm)