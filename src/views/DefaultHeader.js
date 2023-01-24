import React from 'react'
import { DefaultNavBar } from "../ui-components";
import { useNavigate } from 'react-router-dom';
import S3Logo from '../custom-components/S3Logo';

function DefaultHeader() {
    const navigate = useNavigate()

    function handleHomeClick() {
        navigate("/home")
    }

    function handleLoginClick() {
        navigate("/")
    }

    return (
        <DefaultNavBar
            logo={<S3Logo />}
            homeClickHandler={handleHomeClick}
            loginClickHandler={handleLoginClick}
        />
    );
}

export default DefaultHeader

