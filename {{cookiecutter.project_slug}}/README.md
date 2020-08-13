{{cookiecutter.project_name}}
{{ '=' * cookiecutter.project_name|length }}

{{cookiecutter.description}}

<a href="https://github.com/vchaptsev/cookiecutter-django-vue">
    <img src="https://img.shields.io/badge/built%20with-Cookiecutter%20Django%20Vue-blue.svg" />
</a>

## Required Configuration based on options chosen

- CircleCI needs to be updated to include proper names.
- Configure bash scripts in Scripts folder for frontend/backend
- Update AWS required keys in settings.py
- Configure Rancher CLI file


## Development - Backend
+ run `docker-compose up --build`

## Development - Front
+ run `npm run serve`

