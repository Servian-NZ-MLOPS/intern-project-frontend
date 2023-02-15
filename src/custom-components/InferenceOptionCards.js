import React from "react";

import {
    Heading,
    Text,
    Button,
  } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";
  

function InferenceOptionCard({cardHeading, cardDescription, buttonText, routePath}) {
    return (
        <CustomCard cardHeight="400px">
            <Heading level={5}>
                {cardHeading}
            </Heading>
            <Text as="span" style={{ textAlign: "center"}}>
                {cardDescription}
            </Text>
            <Link to={routePath}>
                <Button variation="primary">{buttonText}</Button>
            </Link>
        </CustomCard>
                    
    );
}

export default InferenceOptionCard