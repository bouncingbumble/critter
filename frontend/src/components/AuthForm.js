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

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signup ? "signup" : "signin";
        this.props.onAuth(authType, this.state);
    }

    render() {
        const { email, username, profileImageUrl } = this.state;
        const { heading, buttonText, signup, errors, history, removeError } = this.props;

        history.listen(() => {
            removeError();
        })

        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{ heading }</h2>
                            {errors.message && (<div className="alert alert-danger">{ errors.message } </div>)}
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" onChange={this.handleChange} value={email} className="form-control"/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control"/>
                            { signup && (
                                <div>
                                    <label htmlFor="username">Username:</label>
                                    <input type="text" id="username" name="username" onChange={this.handleChange} value={username} className="form-control"/>
                                    <label htmlFor="img-url">Pic Url:</label>
                                    <input type="text" id="img-url" name="profileImageUrl" onChange={this.handleChange} value={profileImageUrl} className="form-control"/>
                                </div>
                            )}
                            <button className="btn btn-primary btn-block btn-lg" type="submit">{ buttonText } </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}