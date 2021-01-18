from django.urls import path
from .views import CustomerUserCreate

app_name = 'users'

urlpatterns = [
    path('register/', CustomerUserCreate.as_view(), name='create_user')
]