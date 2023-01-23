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
  
function SignUpForm() {
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
        async function signUp() {
            try {
                const { user } = await Auth.signUp({
                    username: inputs.username,
                    password: inputs.password,
                    attributes: {
                        email: inputs.email,
                    },
                    autoSignIn: {
                        enabled: true,
                    }
                });
                console.log(user);
                setLoading(false)
            } catch (error) {
                console.log('error signing up:', error);
            }
        };
        setLoading(true);
        signUp();
    };

    return (
        <Flex as="form" direction="column" gap={tokens.space.medium} onSubmit={handleFormSubmit}>
            <Heading level={3}>Sign Up</Heading>
            <TextField 
                label="Username"
                name="username" 
                autoComplete="username"
                onChange={handleFormChange}
            />
            <TextField 
                label="Email"
                name="email" 
                autoComplete="email"
                onChange={handleFormChange}
            />
            <PasswordField
                label="Password"
                name="password"
                autoComplete="new-password"
                descriptiveText="Password must be at least 8 characters"
                onChange={handleFormChange}
            />
            <Button 
                type="submit" 
                isLoading={loading}
            >
                Sign Up
            </Button>
        </Flex>
    );
};

export default SignUpForm;