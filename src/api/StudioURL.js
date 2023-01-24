import { Auth } from "aws-amplify"


export const getStudioURL = async () => {
    const tokens = await Auth.currentSession()

    const response = await fetch(`https://r2iubqb09l.execute-api.ap-southeast-2.amazonaws.com/default/api/external`, {
        headers: {
            Authorization: `Bearer ${tokens.getIdToken().getJwtToken()}`
        }
    });

    return await response.json()
}