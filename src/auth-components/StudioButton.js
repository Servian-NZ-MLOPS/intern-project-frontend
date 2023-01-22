import React, { useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Button } from "@aws-amplify/ui-react";

const StudioButton = () => {

    const { getAccessTokenSilently } = useAuth0();

    const [loading, setIsLoading] = useState(false);

    const handleClick = () => {
        callApi()
        setIsLoading(true)
    }

    const callApi = async () => {
        const token = await getAccessTokenSilently({
            audience: 'https://auth0-jwt-authorizer',
            scope: 'read:studio'
        });
        const response = await fetch(`https://uml5vqy1nj.execute-api.ap-southeast-2.amazonaws.com/default/api/external`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const location = await response.json()
        console.log(location)

        window.location.replace(location)
    };


    return (
        <Button
            variation="primary"
            size="large" 
            isFullWidth={true}
            isLoading={loading}
            onClick={handleClick}
        >
            Studio
        </Button>
    );
};

export default StudioButton;