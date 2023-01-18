from rest_framework.generics import ListAPIView
from . import serializers
from . import models


class CategoryListAPIView(ListAPIView):
    serializer_class = serializers.CategorySerializer

    def get_queryset(self):
        return models.Category.objects.all()


class AuthorListAPIView(ListAPIView):
    serializer_class = serializers.AuthorSerializer

    def get_queryset(self):
        return models.Author.objects.all()


class RecipeListAPIView(ListAPIView):
    serializer_class = serializers.RecipeSerializer

    def get_queryset(self):
        return models.Recipe.objects.all()
