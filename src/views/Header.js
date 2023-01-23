import React, { useState, useEffect } from 'react'
import { NavBar } from "../ui-components";
import { useNavigate } from 'react-router-dom';
import { Auth, Storage } from 'aws-amplify'

function Header(){
    const user = Auth.currentAuthenticatedUser()

    // Add logo image to state variables
    const [logoImage, setLogoImage] = useState(require('../res/images/placeholder.png'))

    // Add function to run whenever something changes
    useEffect(() => {
        // useEffect itself can't be async so we add an internal async function 
        const getLogoFromS3 = async () => {
            // Get image from s3 then set state value
            const logoImageURL = await Storage.get('logo.webp')
            setLogoImage(logoImageURL)
        };
        
        // Firing the async function
        getLogoFromS3();
        
        // Return nothing so that this setup gets cleaned up once finished with
        return () => {};
    });


    return (
        <NavBar
            logo={logoImage}
            profilePicture={user.picture}
        />
    );
}

export default Header

