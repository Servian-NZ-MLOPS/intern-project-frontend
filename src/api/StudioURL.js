import { Auth } from "aws-amplify"


export const getStudioURL = async () => {
    const tokens = await Auth.currentSession()

    const response = await fetch(`https://uml5vqy1nj.execute-api.ap-southeast-2.amazonaws.com/default/api/external`, {
        headers: {
            Authorization: `Bearer ${tokens.getIdToken().getJwtToken()}`
        }
    });

    return await response.json()
}