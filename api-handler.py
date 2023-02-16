import boto3

class ApiHandler:
    ENDPOINT_NAME_ENV_TAG = 'ENDPOINT_NAME'

    # Assumes the full URI not just the object key
    input_uri: str
    client: boto3.Client

    def __init__(self, input_uri: 'str'):
        self.input_uri = input_uri
        self.client = boto3.client('runtime.sagemaker')

    def makeInference(self) -> 'str':


    