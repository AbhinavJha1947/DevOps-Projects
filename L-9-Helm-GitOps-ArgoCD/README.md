# Helm & GitOps (ArgoCD)

This lesson explores advanced Kubernetes application management using Helm charts and GitOps principles with ArgoCD.

## Project Structure
- `helm-chart/`: A packaged version of our Kubernetes manifests (templates + values).
- `argocd-app.yaml`: An ArgoCD Application manifest that links our GitHub repo to the cluster.

## Key Concepts
- **Helm**: The package manager for Kubernetes. It allows you to define, install, and upgrade even the most complex Kubernetes applications.
- **Chart**: A bundle of information necessary to create an instance of a Kubernetes application.
- **GitOps**: A way of implementing Continuous Deployment for cloud-native applications. It uses Git as a single source of truth for declarative infrastructure and applications.
- **ArgoCD**: A declarative, GitOps continuous delivery tool for Kubernetes.

## How to Deploy
### Helm
1. Install Helm.
2. Install the chart:
   ```bash
   helm install my-flask-app ./helm-chart
   ```

### GitOps (ArgoCD)
1. Install ArgoCD on your K8s cluster.
2. Apply the application manifest:
   ```bash
   kubectl apply -f argocd-app.yaml
   ```
3. ArgoCD will now automatically sync changes from your Git repo to the cluster.

## Why Helm & GitOps?
- **Reusability**: Use Helm charts to deploy the same app across different environments (Dev, Staging, Prod).
- **Consistency**: GitOps ensures the cluster state matches the desired state in Git.
- **Auditability**: Every change to the infrastructure or application is recorded in Git.
