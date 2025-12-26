# Git & GitHub Basics

This lesson covers the fundamentals of version control using Git and hosting on GitHub.

## Essential Git Commands

### Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Getting Started
```bash
git init          # Initialize a new local repository
git clone <url>   # Clone an existing repository
```

### Basic Workflow
```bash
git status        # Check the status of your files
git add <file>    # Stage changes
git add .         # Stage all changes
git commit -m "Commit message" # Commit staged changes
```

### Remote Repositories
```bash
git remote add origin <url> # Link local repo to remote
git push -u origin main     # Push changes to remote (first time)
git push                    # Push subsequent changes
git pull                    # Fetch and merge changes from remote
```

### Branching
```bash
git branch <name>     # Create a new branch
git checkout <name>   # Switch to a branch
git merge <name>      # Merge a branch into the current one
```

## GitHub Workflow (PR)
1. Fork the repository
2. Clone your fork
3. Create a feature branch
4. Make changes and commit
5. Push to your fork
6. Create a Pull Request (PR) on the original repository

## Demo App
The `demo-app` folder contains a simple web application to practice these commands. try initializing it as a git repo and making your first commit!
