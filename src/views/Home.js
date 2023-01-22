import React from "react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LoginButton from "../auth-components/LoginButton";
import LogoutButton from "../auth-components/LogoutButton";
import { View, useTheme, Card } from "@aws-amplify/ui-react";

const Home = () => {
    const { tokens } = useTheme();

    return (
        <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}   
        >
            <Card>
                <a><LoginButton /></a>
                <a><LogoutButton /> </a>
            </Card>

        </View>
    )
};

export default withAuthenticationRequired(Home);
