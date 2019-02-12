import React from "react";

const UserProfile = ({profileImgUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img src={profileImgUrl} alt={username} className="img-thumbnail" width="200" height="200" />
            </div>
        </div>
    </aside>
)

export default UserProfile;