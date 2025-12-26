# Monitoring & Logging

Observability is crucial for understanding the health and performance of your applications. This lesson covers Prometheus for metrics and Grafana for visualization.

## Project Structure
- `prometheus/prometheus.yml`: Configuration file for the Prometheus scraper.
- `grafana/`: Placeholder for dashboard exports and setup guides.

## Key Concepts
- **Metrics**: Quantitative measurements used to track the performance and health of systems (e.g., CPU usage, request count).
- **Prometheus**: An open-source systems monitoring and alerting toolkit. It collects metrics from tracked targets by "scraping" them.
- **Grafana**: A multi-platform open-source analytics and interactive visualization web application. It provides charts, graphs, and alerts for the web when connected to supported data sources (like Prometheus).
- **Exporter**: A tool that extracts metrics from an application and translates them into a format Prometheus understands.

## Setup Instructions
1. Run Prometheus using Docker:
   ```bash
   docker run -d --name prometheus -p 9090:9090 -v $(pwd)/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
   ```
2. Run Grafana using Docker:
   ```bash
   docker run -d --name grafana -p 3000:3000 grafana/grafana
   ```
3. In Grafana, add Prometheus as a data source (`http://localhost:9090`).
4. Import or create dashboards to visualize your metrics.

## Why Monitoring?
- **Early Detection**: Identify issues before they impact users.
- **Performance Tuning**: Understand bottlenecks and optimize resource usage.
- **Trend Analysis**: Plan for future scaling based on historical data.
