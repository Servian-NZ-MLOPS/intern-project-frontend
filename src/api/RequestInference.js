import { Auth } from "aws-amplify"

export async function requestInference(payload, modelType) {
    const tokens = await Auth.currentSession()

    const response = await fetch(`https://cscvgmca5k.execute-api.ap-southeast-2.amazonaws.com/non-prod/api/external`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokens.getIdToken().getJwtToken()}`
            },
            body: JSON.stringify({ "input": payload, "model": modelType }) // Model Types currently are mnist and categorical
        }
    );
    return await response.json()
}