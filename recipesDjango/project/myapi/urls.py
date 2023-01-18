from django.urls import path
from . import api

urlpatterns = [
    path('category', api.CategoryListAPIView.as_view(), name='api_categories'),
    path('authors', api.AuthorListAPIView.as_view(), name='api_authors'),
    path('recipes', api.RecipeListAPIView.as_view(), name='api_recipe'),
]
