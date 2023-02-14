import React from "react";

import {
    View,
    Flex,
    useTheme,
  } from '@aws-amplify/ui-react';
  
import InferenceOptionCard from "../custom-components/InferenceOptionCards";

function InferencePage() {

    const { tokens } = useTheme();//test

    return (
        <>
          <Flex direction="row" style={{ backgroundColor: "rgb(255, 251, 240)", height: "100vh" }} alignItems="center" justifyContent="center">
            <View
              padding={tokens.space.medium}
            >
              <Flex direction="row" justifyContent="center">
                <InferenceOptionCard 
                  cardHeading={"Inference Gallery"}
                  cardDescription={"View Gallery of MNIST Digits and Get Predictions."}
                  buttonText={"Go to Gallery"}
                  routePath={"/gallery"}
                />

                <InferenceOptionCard 
                  cardHeading={"Inference Canvas"}
                  cardDescription={"Draw your own handwritten digits on a canvas and get predictions from the model."}
                  buttonText={"Go to Canvas"}
                  routePath={"/canvas"}
                />
              </Flex>
            </View>
          </Flex>
        </>
    );
}

export default InferencePage