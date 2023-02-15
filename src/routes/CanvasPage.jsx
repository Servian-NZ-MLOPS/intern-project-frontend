import React, {useEffect, useState} from "react";
import { TextField, withAuthenticator, Button } from "@aws-amplify/ui-react";

import PageLayouts from "../custom-components/PageLayouts";
import CustomCard from "../custom-components/CustomCard";
import { requestInference } from "../api/RequestInference";

  

function CanvasPage() {

    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [bpmValue, setBpmValue] = useState('');

    useEffect(() => {}, []);
  

    const handleFromValue = (event) => {
        setFromValue(event.target.value);
    }

    const handleToValue = (event) => {
        setToValue(event.target.value);
    }

    const handleTimeValue = (event) => {
        setTimeValue(event.target.value);
    }

    const handleBpmValue = (event) => {
        setBpmValue(event.target.value);
    }

    const formSubmitHandler = async () => {

        const formValues = `${fromValue},${toValue},${timeValue},${bpmValue}`;
        console.log(formValues);

        const apiResponse = await requestInference(formValues, "categorical");
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
                    value={fromValue}
                    onChange={handleFromValue}
                />        
                <TextField 
                    descriptiveText="Enter Destination"
                    placeholder="WKA"
                    label="To"
                    value={toValue}
                    onChange={handleToValue}
                />        
                <TextField 
                    descriptiveText="Enter Time of Day"
                    placeholder="Morning"
                    label="Time_of_Day"
                    onChange={handleTimeValue}
                    value={timeValue}
                />        
                <TextField 
                    descriptiveText="Enter BPM"
                    placeholder="1.21"
                    label="BPM"
                    onChange={handleBpmValue}
                    value={bpmValue}
                />
                <Button onClick={formSubmitHandler}>
                    Submit!
                </Button>                 
            </CustomCard>
        </PageLayouts>
    );
}

export default withAuthenticator(CanvasPage);