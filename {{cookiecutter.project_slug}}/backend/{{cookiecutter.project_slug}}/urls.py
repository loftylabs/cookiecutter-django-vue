from django.urls import path
from django.contrib import admin
from django.contrib.auth import logout
{% if cookiecutter.api == 'REST' %}
from django.conf.urls import include

# from config.api import api
import importlib
my_module = importlib.import_module("{{cookiecutter.project_slug}}.api")
api = getattr(my_module, "api")



{% elif cookiecutter.api == 'GraphQL' %}
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

from graphene_django.views import GraphQLView
{% endif %}


urlpatterns = [
    path('admin/', admin.site.urls, name='admin'),
    path('logout/', logout, {'next_page': '/'}, name='logout'),
    {% if cookiecutter.api == 'REST' %}
    path('api/', include(api.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    {% elif cookiecutter.api == 'GraphQL' %}
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=settings.DEBUG))),
    {% endif %}
]
