import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signout } from '../store/actions/auth';
import { connect } from 'react-redux';

class Navbar extends Component {
    signout = e => {
        e.preventDefault();
        this.props.signout();
    }
    render(){
        return (
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src="logo.png" style={{"maxWidth":"50px"}}alt="Critter Home" />
                        </Link>
                    </div>
                    { 
                        this.props.currentUser.isAuthenticated ? (
                        <ul className="nav-navbar-nav navbar-right">
                            <li>
                                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Tweet</Link>
                            </li>
                            <li>
                                <a href="/" onClick={ this.signout }>Sign Out</a>
                            </li>
                        </ul>
                    ) : (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                        </ul>
                    )
                    }

                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, { signout })(Navbar);