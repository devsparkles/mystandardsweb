from django.db import models

from core.abstract.models import AbstractManager, AbstractModel


class CommentManager(AbstractManager):
    pass


class Comment(AbstractModel):
    post = models.ForeignKey(to="core_post.Post", on_delete=models.PROTECT)
    author = models.ForeignKey(to="core_user.User", on_delete=models.PROTECT)
    body = models.TextField()
    edited = models.BooleanField(default=False)

    objects = CommentManager()

    def __str__(self):
        try:
            value = self.body[:60]
        except IndexError:
            value = ""  # or an alternative string like "Not enough characters"
        return value

    class Meta:
        db_table = "'core.comment'"
