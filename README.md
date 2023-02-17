# First Steps

* [Read first.](https://i.kym-cdn.com/entries/icons/original/000/022/172/B5JUhG8CUAAd2b1.png)

# Deployment

* Download the Amplify CLI and run amplify init in this folder
* Run Amplify add Auth
* You must add a custom lambda function to Cognito's pre-token authorization step that takes the group the user is in and adds it to the scopes.
* That group - scope connection is how the api gateway differentiates between any old user who signed up and the users who have been manually specified as authenticated users (current setup expects the authenticated group to be called 'mlops').
* Run Amplify add Storage
* Upload the required images into the public folder of the created storage bucket
* Run Amplify add Hosting
* Run Amplify push
* Run Amplify publish

# Interacting with the Terraform Pipeline

* The domain pipeline defines the following variables based off of information about the front end:
  * JWK_URL -> The URL we request JWT from
  * AUDIENCE -> The ID of the user pool
  * USER_PROFILE_TAG -> The information provided by the user login that we use to differentiate between Studio user profiles (We used 'given_name' though the auth settings have to be changed to map google profile data to cognito user data or this value won't be filled)

* The front end requires the hardcoded urls used in the src/api/ functions to be changed to point at the URL for the new API gateway (as we don't have any static domain names.)

# Interacting with Models

* The current setup expects mnist images to be available in the frontend bucket and publically available so the lambda function can also access them.
* The categorical model doesn't require any other setup beyond fixing the api gateway url.
* Both models are hosted on serverless endpoints so it takes ~30 seconds for the inference buttons to work as the models have to spin up before they can respond. 