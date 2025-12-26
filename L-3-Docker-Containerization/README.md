# Docker & Containerization

In this lesson, we learn how to package applications and their dependencies into lightweight, portable containers using Docker.

## Project Structure
- `app/`: Contains a simple Python Flask application that uses Redis.
- `Dockerfile`: Instructions for building the application image.
- `docker-compose.yml`: Defines a multi-container environment (App + Redis).

## Key Concepts
- **Image**: A read-only template with instructions for creating a Docker container.
- **Container**: A runnable instance of an image.
- **Dockerfile**: A text document that contains all the commands a user could call on the command line to assemble an image.
- **Docker Compose**: A tool for defining and running multi-container Docker applications.

## How to Run
1. Make sure you have Docker and Docker Compose installed.
2. Run the application:
   ```bash
   docker-compose up --build
   ```
3. Access the application at `http://localhost:5000`.
4. To stop the containers:
   ```bash
   docker-compose down
   ```

## Why Docker?
- **Consistency**: "It works on my machine" is no longer an issue.
- **Isolation**: Applications run in their own environments.
- **Efficiency**: Containers share the host OS kernel, making them much lighter than VMs.
