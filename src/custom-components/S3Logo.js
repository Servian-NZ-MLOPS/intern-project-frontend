import React from 'react'
import { Image, Loader } from "@aws-amplify/ui-react";
import { useState } from "react";
import { Storage } from 'aws-amplify';

function S3Logo() {

    // Add logo image to state variables
    const [isLoading, setIsLoading] = useState(true)
    const [logoImageUrl, setImageURL] = useState('')

    const getLogoFromS3 = async () => {
        // Get image from s3 then set state value
        const url = await Storage.get('logo.webp')
        setImageURL(url)
        setIsLoading(false)
    };
    // Firing the async function
    getLogoFromS3();

    return (
        <>
        {isLoading ? <Loader /> : <Image src={logoImageUrl} />}
        </>
    );
}

export default S3Logo;