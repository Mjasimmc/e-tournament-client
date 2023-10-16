import React, { useState } from 'react';
import UserDataPlayerComp from '../../Components/player/Profile/UserData';
import EditProfilePlayers from '../../Components/player/Profile/EditProfile';
const ProfilePlayerPage = () => {
    const [showEdit, setShowEdit] = useState(false)
    return (
        <>
            {showEdit && <EditProfilePlayers {...{showEdit, setShowEdit}} />}
           
           
            {!showEdit && <UserDataPlayerComp {...{showEdit, setShowEdit}} />}
        </>
    );
}

export default ProfilePlayerPage;
