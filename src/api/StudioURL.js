import { Auth } from "aws-amplify"


export const getStudioURL = async () => {
    const tokens = await Auth.currentSession()

    const response = await fetch(`https://uaj6id41c6.execute-api.ap-southeast-2.amazonaws.com/infra-dev/api/model`, {
        headers: {
            Authorization: `Bearer ${tokens.getIdToken().getJwtToken()}`
        }
    });

    return await response.json()
}