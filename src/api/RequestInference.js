import { Auth } from "aws-amplify"

export async function requestInference() {
    const tokens = await Auth.currentSession()

    const response = await fetch(`https://uml5vqy1nj.execute-api.ap-southeast-2.amazonaws.com/default/api/model`,
        {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokens.getIdToken().getJwtToken()}`
            },
            body: JSON.stringify({"input_uri": "TODO.."})
        }
    );
    return await response.json()
}