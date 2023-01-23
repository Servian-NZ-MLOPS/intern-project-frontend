import React, { useState, useEffect } from 'react'
import { NavBar } from "../ui-components";
import { Auth, Storage } from 'aws-amplify'
import { Image, Loader, withAuthenticator } from '@aws-amplify/ui-react';
import { redirect, useNavigate } from 'react-router-dom';

function Header(props){
    const profilePictureURL = props.profilePictureURL 
    const navigate = useNavigate()

    // Add logo image to state variables
    const [logo, setLogo] = useState(<Loader />)
    const [logoImageUrl, setImageURL] = useState('')

    // Add function to run whenever something changes
    useEffect(() => {
        // useEffect itself can't be async so we add an internal async function
        if (logoImageUrl !== '') {
            setLogo(<Image src={logoImageUrl} />)
        }
        
        // Return nothing so that this setup gets cleaned up once finished with
        return () => {};
    }, [logoImageUrl]);

    const getLogoFromS3 = async () => {
        // Get image from s3 then set state value
        const url = await Storage.get('logo.webp')
        setImageURL(url)
    };
    // Firing the async function
    getLogoFromS3();

    function handleHomeClick() {
        navigate("/home")
    }

    function handleStudioClick() {
        navigate("/studio")
    }

    return (
        <div>
            <NavBar
                logo={logo}
                profilePicture={profilePictureURL}
                homeClickHandler={handleHomeClick}
                studioClickHandler={handleStudioClick}
            />
        </div>
    );
}

export default Header

