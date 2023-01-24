import { withAuthenticator } from "@aws-amplify/ui-react";
import UserHeader from "../views/UserHeader";
import StudioHero from "../views/StudioHero";

function Root({ user }) {

    return (
        <>
            <UserHeader
                profilePictureURL={user.attributes.picture}
            />
            <StudioHero
                userProfileName ={user.attributes.given_name}
                userEmail = {user.attributes.email}
                sagemakerDomain = "Manual"
             />
        </>
    );
}

export default withAuthenticator(Root);