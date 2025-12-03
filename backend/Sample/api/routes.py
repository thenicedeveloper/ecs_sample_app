from ninja import Router
from Sample.services.container_info_service import get_container_info
from .schemas import ContainerInfoResponse

router = Router(tags=["Sample"])

@router.get("/container-info", response=ContainerInfoResponse)
def get_info(request):
    """
    Returns container info for host, docker, or ECS.
    """
    return get_container_info()