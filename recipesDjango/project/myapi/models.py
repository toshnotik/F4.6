from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'
        ordering = ('title',)


class Author(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'author'
        verbose_name_plural = 'authors'
        ordering = ('name',)


class Recipe(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    authors = models.ManyToManyField(Author)
    text = models.TextField()

    def __str__(self):
        return self.title

    def preview(self):
        return self.text[0:123] + '...'

    class Meta:
        verbose_name = 'recipe'
        verbose_name_plural = 'recipes'
        ordering = ('title',)

    def authors_names(self) -> list:
        return [a.name for a in self.authors.all()]

    def category_title(self) -> list:
        return self.category.title
