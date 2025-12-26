import json

def lambda_handler(event, context):
    print("Welcome to AWS Lambda!")
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from DevOps Cloud Native Demo!')
    }
