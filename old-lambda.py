
import boto3
import os
import json
import jwt
from jwt import PyJWKClient, PyJWKSet

SAGEMAKER_DOMAIN_ID = os.environ['SAGEMAKER_DOMAIN_ID']
REGION = os.environ['REGION']
URL = "https://dev-5i6l1yvkeqcy65ux.us.auth0.com/.well-known/jwks.json"


def lambda_handler(event, context):
    client = boto3.client('sagemaker', region_name=REGION)

    token = str(event["headers"]["authorization"])
    token = token.replace('Bearer ','')
    
    jwks_client = PyJWKClient(URL)
    
    signing_key = jwks_client.get_signing_key_from_jwt(token)
    
    header_data = jwt.get_unverified_header(token)
    
    decoded = jwt.decode(
        token,
        signing_key.key,
        algorithms=[
            header_data['alg'],
        ],
        audience=[
            "https://auth0-jwt-authorizer",
            "https://dev-5i6l1yvkeqcy65ux.us.auth0.com/userinfo"
        ],
    )
    
    user_profile = decoded['username'].lower()

    response = client.create_presigned_domain_url(
        DomainId=SAGEMAKER_DOMAIN_ID,
        UserProfileName=user_profile,
        SessionExpirationDurationInSeconds=43200,
        ExpiresInSeconds=60
    )

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': "*",
            'Location': response['AuthorizedUrl']
        },
        'body': json.dumps(response['AuthorizedUrl'])
    }