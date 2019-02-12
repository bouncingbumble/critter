import React from "react";

const UserProfile = ({profileImageUrl, username}) => (
    <div className="card" style={{"width": "18rem"}}>
        <img src={profileImageUrl} alt={username} className="profile-image-large" width="100" height="100" />
        <div className="card-body">
            <h5 className="card-title">{username}</h5>
            <p className="card-text">This is where the users bio will go, coming soon. . .</p>
            <a href="#" >Tweets: tbd</a><br></br>
            <a href="#" > Followers: tbd</a><br></br>
            <a href="#" > Following: tbd</a>
        </div>
    </div>
)

export default UserProfile;