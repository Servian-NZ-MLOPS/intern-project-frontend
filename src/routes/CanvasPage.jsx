import React, {useState} from "react";
import { TextField, withAuthenticator } from "@aws-amplify/ui-react";
import { requestInferenceCategorical } from "../api/RequestInferenceCategorical";

import {
    Card,
    Flex,
    Button,
    useTheme,
    View,
  } from '@aws-amplify/ui-react';

  

function CanvasPage() {

    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [bpmValue, setBpmValue] = useState('');

    const formSubmitHandler = async () => {
        const apiResponse = await requestInferenceCategorical("ZQN,WKA,Morning,1.21");
        console.log("APIIIII: ", apiResponse);
        let result = apiResponse["result"];
        let message = apiResponse["message"];
        console.log("Result: ", result);
        console.log("Message: ", message);

    };

    const { tokens } = useTheme();//test

    return (
        <>
            <Flex direction="row" style={{ backgroundColor: "rgb(255, 251, 240)", height: "100vh" }} alignItems="center" justifyContent="center">
                <View
                    padding={tokens.space.medium}
                >
                    <Flex direction="row" justifyContent="center">
                        <Card 
                            variation="elevated" 
                            style=
                                {{ display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                                flexBasis: "500px", 
                                flexShrink: "1", 
                                height: "520px",
                                borderRadius: "12px"
                                }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Flex
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                gap={tokens.space.xs}
                                >
                                    <TextField 
                                        descriptiveText="Enter Origin"
                                        placeholder="ZQN"
                                        label="From"
                                        value={fromValue}
                                    />        
                                    <TextField 
                                        descriptiveText="Enter Destination"
                                        placeholder="WKA"
                                        label="To"
                                        value={toValue}
                                    />        
                                    <TextField 
                                        descriptiveText="Enter Time of Day"
                                        placeholder="Morning"
                                        label="Time_of_Day"
                                        value={timeValue}
                                    />        
                                    <TextField 
                                        descriptiveText="Enter BPM"
                                        placeholder="1.21"
                                        label="BPM"
                                        value={bpmValue}
                                    />
                                    <Button onClick={() => formSubmitHandler()}>
                                        Submit!
                                    </Button>                 
                                </Flex>
                            </div>
                        </Card>
                    </Flex>
                </View>
            </Flex>


        </>
    );
}

export default withAuthenticator(CanvasPage);