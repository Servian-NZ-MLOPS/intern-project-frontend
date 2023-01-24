import React, { useState } from 'react'
import { UserNavBar } from "../ui-components";
import { useNavigate } from 'react-router-dom';
import { getStudioURL } from '../api/StudioURL';
import S3Logo from '../custom-components/S3Logo';
import { Auth } from 'aws-amplify';

function UserHeader(props){
    const profilePictureURL = props.profilePictureURL
    const navigate = useNavigate()

    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function handleHomeClick() {
        navigate("/home")
    }

    const handleStudioClick = () => {
        setIsButtonLoading(true)
        callApi()
    }

    const callApi = async () => {
        
        const location = await getStudioURL()
        console.log(location)
        setIsButtonLoading(false)

        // window.location.replace(location)
    };

    const handleLogoutClick = async () => {
        Auth.signOut().then(() => {
            navigate("/home")
        })
    }

    return (
        <UserNavBar
            logo={<S3Logo/>}
            profilePicture={profilePictureURL}
            homeClickHandler={handleHomeClick}
            studioClickHandler={handleStudioClick}
            isStudioLoading={isButtonLoading}
            logoutClickHandler={handleLogoutClick}
        />
    );
}

export default UserHeader

