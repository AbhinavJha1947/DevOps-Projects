# Ansible Automation

This lesson demonstrates how to use Ansible for automated configuration management and application deployment.

## Project Structure
- `inventory`: Defines the hosts and groups of servers managed by Ansible.
- `playbook.yml`: A YAML file defining the tasks to be executed on the managed hosts.

## Key Concepts
- **Control Node**: The machine where Ansible is installed and from which you run commands.
- **Managed Nodes**: The servers managed by the Control Node.
- **Inventory**: A list of managed nodes, often organized into groups.
- **Playbook**: A configuration, deployment, and orchestration language for Ansible.
- **Module**: Small programs that Ansible pushes out to managed nodes to perform tasks (e.g., `apt`, `service`, `copy`).

## How to Run
1. Ensure you have Ansible installed on your control node.
2. Update the `inventory` file with your server details.
3. Run the playbook:
   ```bash
   ansible-playbook -i inventory playbook.yml
   ```

## Why Ansible?
- **Agentless**: No software needs to be installed on the managed nodes.
- **Idempotent**: Running the same playbook multiple times results in the same state without unnecessary changes.
- **Simple**: Uses human-readable YAML for configuration.
