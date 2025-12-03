from ninja import Schema
from typing import List


class ContainerDetailsSchema(Schema):
    name: str
    container_id: str
    container_ip: str


class ContainerInfoResponse(Schema):
    environment: str
    containers: List[ContainerDetailsSchema]