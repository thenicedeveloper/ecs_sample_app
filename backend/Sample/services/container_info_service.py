# backend/Sample/services/container_info_service.py

import os
import socket
import json
import urllib.request


# ---------------------------------------------------
#  Environment Detection
# ---------------------------------------------------

def is_running_in_docker():
    """
    Detects if running inside Docker (Docker Compose, ECS EC2, ECS Fargate).
    """
    return os.path.exists("/.dockerenv")


def is_running_in_ecs():
    """
    Detects if running inside ECS by checking the metadata URI environment variable.
    """
    return "ECS_CONTAINER_METADATA_URI_V4" in os.environ


# ---------------------------------------------------
#  IP Detection Helpers
# ---------------------------------------------------

def get_host_machine_ip():
    """
    Returns the host machine IP when NOT inside Docker.
    Local machine or EC2 instance.
    """
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))  # No traffic actually sent
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"


def get_container_internal_ip():
    """
    Returns the container's internal IP address.
    Example: 172.19.x.x in Docker Compose.
    """
    try:
        hostname = socket.gethostname()
        return socket.gethostbyname(hostname)
    except Exception:
        return "unknown"


# ---------------------------------------------------
#  Docker / ECS Container ID Helpers
# ---------------------------------------------------

def get_container_id_from_cgroup():
    """
    Extracts container ID from /proc/self/cgroup for Docker + ECS EC2.
    """
    try:
        with open("/proc/self/cgroup", "r") as f:
            for line in f:
                if "docker" in line or "containerd" in line:
                    return line.strip().split("/")[-1][:12]
    except:
        pass

    return os.getenv("HOSTNAME", "unknown")


# ---------------------------------------------------
#  ECS Metadata Logic
# ---------------------------------------------------

def fetch_ecs_task_metadata():
    """
    Fetches ECS task metadata for the whole task (ALL containers).
    Uses ECS metadata endpoint V4 (works on ECS EC2 & Fargate).
    """
    uri = os.getenv("ECS_CONTAINER_METADATA_URI_V4")
    if not uri:
        return None

    try:
        with urllib.request.urlopen(uri) as response:
            return json.loads(response.read().decode())
    except:
        return None


def get_ecs_containers():
    """
    Returns list of {name, id, ip} for ALL containers in the ECS task.
    """
    metadata = fetch_ecs_task_metadata()
    if not metadata or "Containers" not in metadata:
        return None

    containers = []
    for c in metadata["Containers"]:
        container_id = c.get("DockerId", "")[:12]
        name = c.get("Name", "unknown")

        # ECS may list multiple networks; use the first IPv4
        networks = c.get("Networks", [])
        if networks and "IPv4Addresses" in networks[0]:
            ip = networks[0]["IPv4Addresses"][0]
        else:
            ip = "unknown"

        containers.append({
            "name": name,
            "container_id": container_id,
            "container_ip": ip
        })

    return containers


# ---------------------------------------------------
#  Unified Public Method Called by API
# ---------------------------------------------------

def get_container_info():
    """
    Returns environment-aware metadata for:
      - Host (local dev)
      - Docker Compose
      - ECS task (ALL containers)
    """

    # ECS → Return all containers in the task
    if is_running_in_ecs():
        containers = get_ecs_containers()
        if containers:
            return {
                "environment": "ecs",
                "containers": containers
            }

    # Docker Compose → Return only this backend container
    if is_running_in_docker():
        return {
            "environment": "docker",
            "containers": [
                {
                    "name": "backend",
                    "container_id": get_container_id_from_cgroup(),
                    "container_ip": get_container_internal_ip(),
                }
            ]
        }

    # Running directly on the host (python manage.py runserver)
    return {
        "environment": "host",
        "containers": [
            {
                "name": "host-machine",
                "container_id": os.getenv("HOSTNAME", "local"),
                "container_ip": get_host_machine_ip(),
            }
        ]
    }
