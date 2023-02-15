import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
  
import InferenceOptionCard from "../custom-components/InferenceOptionCards";
import PageLayouts from "../custom-components/PageLayouts";

function InferencePage() {

    return (
      <PageLayouts>
        <InferenceOptionCard 
          cardHeading={"Inference Gallery"}
          cardDescription={"View Gallery of MNIST Digits and Get Predictions."}
          buttonText={"Go to Gallery"}
          routePath={"/gallery"}
        />

        <InferenceOptionCard 
          cardHeading={"Inference Entrada"}
          cardDescription={"Make an Inference from Entrada Data."}
          buttonText={"Go to Entrada"}
          routePath={"/entrada"}
        />
      </PageLayouts>
                
    );
}

export default withAuthenticator(InferencePage);