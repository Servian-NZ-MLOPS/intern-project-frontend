import React from "react";

import {
    Card,
    Flex,
    useTheme,
  } from '@aws-amplify/ui-react';
  

function CustomCard({children, cardHeight}) {
    const { tokens } = useTheme();//test
    return (
        <Card 
            variation="elevated" 
            style=
                {{ display: "flex", 
                   justifyContent: "center", 
                   alignItems: "center", 
                   flexBasis: "500px", 
                   flexShrink: "1", 
                   height: {cardHeight},
                   borderRadius: "12px"
                }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                gap={tokens.space.xs}
                >
                    {children}                    
                </Flex>
            </div>
        </Card>
    );
}

export default CustomCard;