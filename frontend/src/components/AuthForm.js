import React, { Component } from "react";

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, username, passward, profileImageUrl } = this.state;
        const { heading, buttonText, signup } = this.props;
        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmite}>
                            <h2>{ heading }</h2>
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" onChange={this.handleChange} value={email} className="form-control"/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control"/>
                            { signup && (
                                <div>
                                    <label htmlFor="username">Email:</label>
                                    <input type="text" id="username" name="username" onChange={this.handleChange} value={username} className="form-control"/>
                                    <label htmlFor="img-url">Password:</label>
                                    <input type="text" id="img-url" name="profileImageUrl" onChange={this.handleChange} value={profileImageUrl} className="form-control"/>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}