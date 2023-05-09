import pytest
from rest_framework.test import APIClient


@pytest.fixture
def client():
    return APIClient()


pytest_plugins = ['core.fixtures.user', 'core.fixtures.post', 'core.fixtures.comment']
