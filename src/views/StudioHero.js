import { useState } from "react";
import { Storage } from 'aws-amplify'
import { StudioButtonHeroLayout } from "../ui-components";
import { getStudioURL } from "../api/StudioURL";
import { requestInference } from "../api/RequestInference"
import { Button, Flex } from "@aws-amplify/ui-react";

function StudioHero(props) {

    const userProfileName = props.userProfileName
    const userEmail = props.userEmail
    const sagemakerDomain = props.sagemakerDomain

    const [backgroundImageURL, setBackgroundImageURL] = useState('') 

    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const getBackgroundImageFromS3 = async () => {
        const url = await Storage.get('background.jpg')
        setBackgroundImageURL(url)

    }

    getBackgroundImageFromS3()
    // For testing purposes
    // handleInferenceClick()

    const handleStudioClick = () => {
        setIsButtonLoading(true)
        callApi()
    }

    const callApi = async () => {
        
        const location = await getStudioURL()
        console.log(location)
        setIsButtonLoading(false)
        window.location.replace(location)
    };

    // function handleInferenceClick() {
    //     // This really necessary??
    //     setIsButtonLoading(true)
    //     callModelAPI()
    // }

    // async function callModelAPI() {
    //     const response = await requestInference()
    //     console.log(response)
    //     setIsButtonLoading(false)
    // }

    return (
        <>
            <Flex>
                <StudioButtonHeroLayout
                    backgroundImageURL={backgroundImageURL}
                    topText={"User Profile: " + userProfileName}
                    midText={"Domain: " + sagemakerDomain}
                    botText={"Email: " + userEmail}
                    studioOnClickHandler={handleStudioClick}
                    isLoading={isButtonLoading}
                />
                {/* <Button 
                    onClick={handleInferenceClick}
                    isLoading={isButtonLoading} 
                /> */}
            </Flex>
        </>

    );
}

export default StudioHero