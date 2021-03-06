import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container-fluid">
            <Switch>
                <Route 
                    exact path="/" 
                    render={props => <Homepage currentUser={ currentUser } {...props} /> } 
                />
                <Route 
                    exact path="/signin" 
                    render={props => 
                            <AuthForm 
                                removeError = { removeError }
                                errors = { errors }
                                onAuth={ authUser } 
                                buttonText="Sign In" 
                                heading="Welcome Back." 
                                {...props}
                            />
                }/>
                <Route 
                    exact path="/signup" 
                    render={props => 
                            <AuthForm 
                                removeError = { removeError }
                                errors = { errors }
                                onAuth={ authUser } 
                                signup 
                                buttonText="Sign Up" 
                                heading="Join Twitter Today!" 
                                {...props}
                            />
                }/>
                <Route 
                    path="/users/:id/messages/new" 
                    component={withAuth(MessageForm)} 
                />
            </Switch>
        </div>
    );
};

//this is the first argument passed to connect
//it is used for selecting the part of the data from the store that the connected component needs
//this gets called every time the store state changes
//this gets the entire store state and return an object of data that this component needs
function mapStateToProps(state){
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));