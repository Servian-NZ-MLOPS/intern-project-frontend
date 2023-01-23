import React from 'react';
import { Flex, useTheme, View, Card } from '@aws-amplify/ui-react';
import { withAuthenticationRequired } from "@auth0/auth0-react"
import Studio from '../views/Profile';
import StudioButton from '../auth-components/StudioButton';
import LogoutButton from '../auth-components/LogoutButton';
import Header from '../views/Header';


function Root() {
  const { tokens } = useTheme();


  return (
    <>
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="0rem"
      >
        <Header />
        <View
          backgroundColor={tokens.colors.background.secondary}
          padding={tokens.space.large}
          height="80rem"
        > 
          <Flex
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
            alignContent="flex-start"
            wrap="nowrap"
            gap="0rem"
          > 
            <Flex
              direction="column"
              justifyContent="space-evenly"
              alignItems="stretch"
              wrap="nowrap"
              >
                <Card
                  variation="elevated"
                >
                  <StudioButton />
                </Card>
                <Card
                  variation='elevated'
                >
                  <LogoutButton />
                </Card>
              </Flex>
            <Studio />
          </Flex>
        </View>
      </Flex>
    </>
  );
};

export default withAuthenticationRequired(Root);
