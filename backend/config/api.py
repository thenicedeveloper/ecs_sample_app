from ninja import NinjaAPI
from core.api.routes import router as core_router
from Sample.api.routes import router as sample_router

api = NinjaAPI(title="Tekdesk API")

# Mount routers
api.add_router("/core/", core_router)
api.add_router("/sample/", sample_router)

__all__ = ["api"]