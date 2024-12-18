from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api_app.views import PatientViewSet

# Create a router instance
router = DefaultRouter()
router.register(r'patient', PatientViewSet)

# Define the URL patterns
urlpatterns = [
    path('', include(router.urls)),
]
