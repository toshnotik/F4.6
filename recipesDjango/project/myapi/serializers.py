from . import models
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ('id', 'title',)


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Author
        fields = ('id', 'name',)


class StringListSerializer(serializers.ListSerializer):
    child = serializers.CharField()


class RecipeSerializer(serializers.ModelSerializer):
    authors_names = StringListSerializer()

    class Meta:
        model = models.Recipe
        fields = ('id', 'title', 'category', 'category_title', 'authors', 'authors_names', 'text')
