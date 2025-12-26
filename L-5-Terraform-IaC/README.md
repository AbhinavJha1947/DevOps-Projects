# Terraform & Infrastructure as Code (IaC)

In this lesson, we learn how to define and provision cloud infrastructure using code with Terraform.

## Project Structure
- `main.tf`: Contains the main infrastructure resources (VPC, Subnet).
- `variables.tf`: Defines input variables for customization.
- `outputs.tf`: Defines information to be displayed after deployment.

## Key Concepts
- **Provider**: A plugin that Terraform uses to interact with cloud providers (like AWS, Azure, GCP).
- **Resource**: A specific piece of infrastructure (e.g., a VPC, an EC2 instance).
- **State**: Terraform keeps track of the infrastructure it manages in a state file.
- **Plan**: A preview of the changes Terraform will make to your infrastructure.

## How to Run
1. Install Terraform.
2. Configure your AWS credentials.
3. Initialize the project:
   ```bash
   terraform init
   ```
4. Preview the changes:
   ```bash
   terraform plan
   ```
5. Apply the changes:
   ```bash
   terraform apply
   ```

## Why IaC?
- **Automation**: Provision infrastructure automatically.
- **Version Control**: Manage your infrastructure changes like code.
- **Reproducibility**: Easily recreate environments.
- **Speed**: Deploy infrastructure faster and with fewer errors.
