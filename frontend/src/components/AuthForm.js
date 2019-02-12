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
        this.props.onAuth(authType, this.state)
        .then(() => {
            this.props.history.push("/");
        })
        .catch(() => {
            return;
        })
    }

    render() {
        const { email, username, profileImageUrl } = this.state;
        const { heading, buttonText, signup, errors, history, removeError } = this.props;

        history.listen(() => {
            removeError();
        })

        return (
            <div class="container-fluid">
                <div className="row">
                    <div class="col-6">
            
                    </div>
                    <div class="col-4">
                        <h2>{ heading }</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div class="form-row">
                                {errors.message && (<div className="alert alert-danger">{ errors.message } </div>)}
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" name="email" onChange={this.handleChange} value={email} className="form-control"/>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control"/>
                                { signup && (
                                    <div className="col-12">
                                        <label htmlFor="username">Username:</label>
                                        <input type="text" id="username" name="username" onChange={this.handleChange} value={username} className="form-control"/>
                                        <label htmlFor="img-url">Pic Url:</label>
                                        <input type="text" id="img-url" name="profileImageUrl" onChange={this.handleChange} value={profileImageUrl} className="form-control"/>
                                    </div>
                                )}
                                <button className="btn btn-primary btn-block btn-lg" type="submit">{ buttonText } </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}