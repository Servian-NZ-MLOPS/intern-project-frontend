import { useState } from "react";
import { Storage } from 'aws-amplify'
import { StudioButtonHeroLayout } from "../ui-components";
import { getStudioURL } from "../api/StudioURL";

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

    return (
        <StudioButtonHeroLayout
            backgroundImageURL={backgroundImageURL}
            topText={"User Profile: " + userProfileName}
            midText={"Domain: " + sagemakerDomain}
            botText={"Email: " + userEmail}
            studioOnClickHandler={handleStudioClick}
            isLoading={isButtonLoading}
        />
    );
}

export default StudioHero