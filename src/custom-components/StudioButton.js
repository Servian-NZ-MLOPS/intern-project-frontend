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
        const response = await fetch(`https://r2iubqb09l.execute-api.ap-southeast-2.amazonaws.com/default/api/external`, {
            headers: {
                Authorization: `Bearer ${tokens.getIdToken().getJwtToken()}`
            }
        });

        const location = await response.json()
        console.log(location)

        // window.location.replace(location)
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