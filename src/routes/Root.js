import { Button, Card, Heading, withAuthenticator } from "@aws-amplify/ui-react";
import StudioButton from "../auth-components/StudioButton";

function Root({signOut, user}) {

    return (
        <Card>
            <Heading level={1}>Hello {user.username}</Heading>
            <Button onClick={signOut}>Sign out</Button>
            <StudioButton />
        </Card>
    );
}

export default withAuthenticator(Root);