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
          <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.medium}
            style={{ height: "100%"}}
          >
            <Flex direction="row" justifyContent="center">
              <InferenceOptionCard 
                cardHeading={"Inference Gallary"}
                cardDescription={"View Gallary of MNIST Digits and Get Predictions."}
                buttonText={"Go to Gallary"}
              />

              <InferenceOptionCard 
                cardHeading={"Inference Canvas"}
                cardDescription={"Draw your own handwritten digits on a canvas and get predictions from the model."}
                buttonText={"Go to Canvas"}
              />
            </Flex>
          </View>
        </>
    );
}

export default InferencePage