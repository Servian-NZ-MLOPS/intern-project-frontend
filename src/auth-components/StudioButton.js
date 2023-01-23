import React, { useState } from "react";
import { Button } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

const StudioButton = () => {

    const [loading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true)
        callApi()
    }

    const callApi = async () => {
        const tokens = await Auth.currentSession()
        const response = await fetch(`https://uml5vqy1nj.execute-api.ap-southeast-2.amazonaws.com/default/api/external`, {
            headers: {
                Authorization: `Bearer ${tokens.getAccessToken().getJwtToken()}`
            }
        });

        const location = await response.json()
        console.log(location)

        window.location.href(location)
    };


    return (
        <Button
            variation="primary"
            size="large" 
            isFullWidth={false}
            isLoading={loading}
            onClick={handleClick}
        >
            Studio
        </Button>
    );
};

export default StudioButton;