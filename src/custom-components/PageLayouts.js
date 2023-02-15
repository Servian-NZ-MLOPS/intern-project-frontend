import React from "react";

import {
    View,
    Flex,
    useTheme,
  } from '@aws-amplify/ui-react';
  

function PageLayouts({children}) {

    const { tokens } = useTheme();//test

    return (
        <>
          <Flex direction="row" style={{ backgroundColor: "rgb(255, 251, 240)", height: "100vh" }} alignItems="center" justifyContent="center">
            <View
              padding={tokens.space.medium}
            >
              <Flex direction="row" justifyContent="center">
                {children}
              </Flex>
            </View>
          </Flex>
        </>
    );
}

export default PageLayouts;