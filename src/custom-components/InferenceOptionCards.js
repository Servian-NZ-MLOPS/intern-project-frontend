import React from "react";

import {
    Card,
    Heading,
    Flex,
    Text,
    Button,
    useTheme,
  } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";
  

function InferenceOptionCard({cardHeading, cardDescription, buttonText, routePath}) {
    const { tokens } = useTheme();//test
    return (
        <Card 
            variation="elevated" 
            style=
                {{ display: "flex", 
                   justifyContent: "center", 
                   alignItems: "center", 
                   flexBasis: "400px", 
                   flexShrink: "1", 
                   height: "400px",
                   borderRadius: "12px"
                }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap={tokens.space.xs}
                >
                    <Heading level={5}>
                        {cardHeading}
                    </Heading>

                    <Text as="span" style={{ textAlign: "center"}}>
                        {cardDescription}
                    </Text>
                    <Link to={routePath}>
                        <Button variation="primary">{buttonText}</Button>
                    </Link>
                    
                </Flex>
            </div>
        </Card>
    );
}

export default InferenceOptionCard