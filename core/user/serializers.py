from rest_framework import serializers

from core.abstract.serializers import AbstractSerializer
from core.user.models import User


class UserSerializer(AbstractSerializer):
    id = serializers.UUIDField(source='public_id', read_only=True, format='hex')
    created = serializers.DateTimeField(read_only=True)
    updated = serializers.DateTimeField(read_only=True)

    class Meta:
        model = User
        fields = [
            "username",
            "name",
            "first_name",
            "last_name",
            "email",
            "is_active",
            "bio",
            "avatar",
        ]
        read_only_fields = ['is_active']
