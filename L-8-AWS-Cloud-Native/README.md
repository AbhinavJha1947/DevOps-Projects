# AWS Cloud Native

This lesson focuses on building and deploying applications using AWS cloud-native services like Lambda and CloudFormation.

## Project Structure
- `lambda/hello_world.py`: A simple serverless function written in Python.
- `cloudformation/s3_bucket.yaml`: A template to provision an S3 bucket as code.

## Key Concepts
- **Serverless**: A cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources (e.g., AWS Lambda).
- **Lambda**: A compute service that lets you run code without provisioning or managing servers.
- **CloudFormation**: A service that gives developers and businesses an easy way to create a collection of related AWS and third-party resources, and provision and manage them in an orderly and predictable fashion.
- **S3 (Simple Storage Service)**: Scalable object storage in the cloud.

## Deployment Guide
### Lambda
1. Zip the `hello_world.py` file.
2. Upload the zip to the AWS Lambda console or use the AWS CLI.
3. Set the handler to `hello_world.lambda_handler`.

### CloudFormation
1. Run the following CLI command to deploy the stack:
   ```bash
   aws cloudformation create-stack --stack-name my-s3-stack --template-body file://cloudformation/s3_bucket.yaml
   ```
2. Monitor the stack creation in the AWS Console.

## Why Cloud Native?
- **Cost Efficiency**: Pay only for what you use (especially with serverless).
- **Scalability**: Services automatically scale to handle varying loads.
- **Reduced Overhead**: Outsource infrastructure management to the cloud provider.
