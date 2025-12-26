# CI/CD Pipeline Project

This lesson demonstrates a basic Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions.

## Project Structure
- `app/`: Contains a simple Node.js (Express) application.
- `.github/workflows/ci-cd.yml`: Defines the automated pipeline.

## How the Pipeline Works
Every time code is pushed to the `main` branch or a Pull Request is opened, GitHub Actions will:
1. **Checkout Code**: Get the latest code from the repository.
2. **Setup Node.js**: Install the required version of Node.js.
3. **Install Dependencies**: Run `npm install` to get packages like Express and Mocha.
4. **Run Tests**: Execute `npm test` to ensure the code works as expected.

## Local Development
To run the app locally:
1. `cd app`
2. `npm install`
3. `npm start` (App runs on port 3000)
4. `npm test` (Runs Mocha tests)

## Key Concepts
- **Continuous Integration (CI)**: Automatically testing and merging code changes.
- **Continuous Deployment (CD)**: Automatically deploying code to production (in this demo, we focus on the CI part).
- **GitHub Actions**: A CI/CD platform that allows you to automate your build, test, and deployment pipeline.
