# Kubernetes Deployment

This lesson explores how to deploy and scale containerized applications on a Kubernetes (K8s) cluster.

## Project Structure
- `k8s/deployment.yaml`: Defines the desired state for our app and redis pods.
- `k8s/service.yaml`: Provides stable networking (internal and external) for pods.
- `k8s/ingress.yaml`: Manages external access to the services in the cluster.

## Key Concepts
- **Pod**: The smallest deployable unit in Kubernetes.
- **Deployment**: Manages a set of identical pods, handling updates and scaling.
- **Service**: An abstract way to expose an application running on a set of Pods as a network service.
- **Ingress**: An API object that manages external access to the services, typically HTTP.

## How to Deploy
1. Ensure you have a running K8s cluster (like Minikube, Docker Desktop, or EKS/GKE).
2. Connect to your cluster.
3. Apply the manifests:
   ```bash
   kubectl apply -f k8s/
   ```
4. Verify the deployment:
   ```bash
   kubectl get pods
   kubectl get svc
   kubectl get ingress
   ```

## Why Kubernetes?
- **Self-healing**: Automatically restarts failed containers.
- **Scaling**: Easily scale up or down based on demand.
- **Service Discovery**: Built-in DNS and load balancing.
- **Zero-downtime Updates**: Roll out changes without interrupting service.
