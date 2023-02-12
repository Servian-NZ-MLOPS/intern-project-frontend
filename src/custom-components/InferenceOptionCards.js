import React from "react";

import {
    Card,
    Heading,
    Flex,
    Text,
    Button,
    useTheme,
  } from '@aws-amplify/ui-react';
  

function InferenceOptionCard({cardHeading, cardDescription, buttonText}) {
    const { tokens } = useTheme();//test
    return (
        <Card style={{ flexBasis: "400px", flexShrink: "1", height: "400px"}}>
            <Flex direction="column" alignItems="center" justifyContent="center">
                <Flex
                direction="column"
                alignItems="center"
                gap={tokens.space.xs}
                >
                    <Heading level={5}>
                        {cardHeading}
                    </Heading>

                    <Text as="span" style={{ textAlign: "center"}}>
                        {cardDescription}
                    </Text>
                    <Button variation="primary">{buttonText}</Button>
                </Flex>
            </Flex>
        </Card>
    );
}

export default InferenceOptionCard