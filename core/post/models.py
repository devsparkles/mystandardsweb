from django.db import models

from core.abstract.models import AbstractManager, AbstractModel


class PostManager(AbstractManager):
    pass


class Post(AbstractModel):
    author = models.ForeignKey(to="core_user.User", on_delete=models.CASCADE)
    body = models.TextField()
    edited = models.BooleanField(default=False)
    objects = PostManager()

    def __str__(self):
        try:
            value = self.body[:60]
        except IndexError:
            value = ""  # or an alternative string like "Not enough characters"
        return value

    class Meta:
        db_table = "'core.post'"
