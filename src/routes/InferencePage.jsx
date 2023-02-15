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
          cardHeading={"Inference Canvas"}
          cardDescription={"Draw your own handwritten digits on a canvas and get predictions from the model."}
          buttonText={"Go to Canvas"}
          routePath={"/canvas"}
        />
      </PageLayouts>
                
    );
}

export default withAuthenticator(InferencePage);