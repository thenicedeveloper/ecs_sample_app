from ninja import Router


router = Router()


@router.get("/")
def home(request):
    return {"message": "Backend API is running ✅"}


@router.get("/hello")
def hello(request):
    return {"message": "Hello from Django Ninja API!"}