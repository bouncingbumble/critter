import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from './MessageTimeline'

const Homepage = ( {currentUser} ) => {
        if(!currentUser.isAuthenticated){
            return (
                <div className="home-hero">
                <h1>What's Happening</h1>
                <h4>New to Critter?</h4>
                <Link to="/signup" className="btn btn-primary">
                    Signup Here
                </Link>
                </div>
            )
        }
        return (
            <MessageTimeline profileImgUrl={currentUser.user.profileImgUrl} username={currentUser.user.username} />
        )
}

export default Homepage;