from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.get_routes, name="routes"),
    path('api/products/', views.get_products, name="products"),
    path('api/products/<str:pk>/', views.get_product, name="product"),
]