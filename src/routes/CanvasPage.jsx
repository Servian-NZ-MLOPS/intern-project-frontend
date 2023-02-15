import React, {useState} from "react";
import { TextField, withAuthenticator, Button } from "@aws-amplify/ui-react";
import { requestInferenceCategorical } from "../api/RequestInferenceCategorical";

import PageLayouts from "../custom-components/PageLayouts";
import CustomCard from "../custom-components/CustomCard";

  

function CanvasPage() {

    const [state, setState] = useState({ fromValue: '', toValue: '', timeValue: '', bpmValue: ''});

    const handleInputs = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    }

    const formSubmitHandler = async () => {

        const formValues = `${state.fromValue},${state.toValue},${state.timeValue},${state.bpmValue}`;
        console.log(formValues);

        const apiResponse = await requestInferenceCategorical("ZQN,WKA,Morning,1.21");
        console.log("APIIIII: ", apiResponse);
        let result = apiResponse["result"];
        let message = apiResponse["message"];
        console.log("Result: ", result);
        console.log("Message: ", message);

    };



    return (
        <PageLayouts>
            <CustomCard cardHeight="520px">
                <TextField 
                    descriptiveText="Enter Origin"
                    placeholder="ZQN"
                    label="From"
                    value={state.fromValue}
                    onInput={handleInputs}
                />        
                <TextField 
                    descriptiveText="Enter Destination"
                    placeholder="WKA"
                    label="To"
                    value={state.toValue}
                    onInput={handleInputs}
                />        
                <TextField 
                    descriptiveText="Enter Time of Day"
                    placeholder="Morning"
                    label="Time_of_Day"
                    onInput={handleInputs}
                    value={state.timeValue}
                />        
                <TextField 
                    descriptiveText="Enter BPM"
                    placeholder="1.21"
                    label="BPM"
                    onInput={handleInputs}
                    value={state.bpmValue}
                />
                <Button onClick={formSubmitHandler}>
                    Submit!
                </Button>                 
            </CustomCard>
        </PageLayouts>
    );
}

export default withAuthenticator(CanvasPage);