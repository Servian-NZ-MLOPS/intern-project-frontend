import { ISignUpResult } from "@aws-amplify/amazon-cognito-identity-js"
import { Flex, Heading, TextField } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState } from "react";

function EmailValidation(username) {

    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    function handleFormChange(event) {
        setCode(event.target.value);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        async function confirmSignUp() {
            try {
                await Auth.confirmSignUp(username, code)
            } catch (error) {
                console.log('error confirming sign up', error);
            }
        }
        setLoading(true);
        confirmSignUp();
    };

    return (
        <Flex as="form" direction="column" gap={tokens.space.medium} onSubmit={handleFormSubmit}>
            <Heading level={3}>Validation Code</Heading>
            <TextField
                label="Username"
                name="username" 
                autoComplete="username"
                onChange={handleFormChange}
            />
            <Button 
                type="submit" 
                isLoading={loading}
            >
                Validate Email
            </Button>
        </Flex>
    );

}

export default EmailValidation;