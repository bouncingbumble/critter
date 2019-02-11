import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
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

export default Homepage;