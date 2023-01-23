import {
    Flex,
    Heading,
    TextField,
    PasswordField,
    Button,
    useTheme,
  } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useState } from 'react';
  
function SignInForm() {
    const { tokens } = useTheme();

    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false);

    function handleFormChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        // Change just the currently active name/value pair and leave the others
        setInputs(values => ({...values, [name]: value}));
    };


    function handleFormSubmit(event) {
        event.preventDefault();
        async function signIn() {
            try {
                const user = await Auth.signIn({
                    username: inputs.username,
                    password: inputs.password
                });
                console.log(user);
                setLoading(false)
            } catch (error) {
                console.log('error signing in:', error);
            }
        };
        setLoading(true);
        signIn();
    };

    return (
        <Flex as="form" direction="column" gap={tokens.space.medium} onSubmit={handleFormSubmit}>
            <Heading level={3}>Login</Heading>
            <TextField 
                label="Username"
                name="username" 
                autoComplete="username"
                onChange={handleFormChange}
            />
            <PasswordField
                label="Password"
                name="password"
                autoComplete="current-password"
                onChange={handleFormChange}
            />
            <Button 
                type="submit" 
                isLoading={loading}
            >
                Login
            </Button>
        </Flex>
    );
};

export default SignInForm;