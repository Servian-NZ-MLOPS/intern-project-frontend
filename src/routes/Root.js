import { Button, Card, Flex, Heading, withAuthenticator } from "@aws-amplify/ui-react";
import StudioButton from "../auth-components/StudioButton";
import Header from "../views/Header";

function Root({signOut, user}) {

    return (
        <Flex
            direction='column'
        >
            <Header />
            <Card>
                <Heading level={1}>Hello {user.username}</Heading>
                <Button onClick={signOut}>Sign out</Button>
                <StudioButton />
            </Card>
        </Flex>
    );
}

export default withAuthenticator(Root);