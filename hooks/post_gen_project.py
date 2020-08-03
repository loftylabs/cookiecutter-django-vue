"""
1. Generates and saves random secret key
2. Renames env.example to .env
3. Deletes unused API files
"""
import os
import random
import string
import shutil

# Get the root project directory
PROJECT_DIRECTORY = os.path.realpath(os.path.curdir)


def set_secret_key():
    """ Generates and saves random secret key """
    with open(os.path.join(PROJECT_DIRECTORY, 'env.example')) as f:
        file_ = f.read()

    punctuation = string.punctuation.replace('"', '').replace("'", '').replace('\\', '')
    secret = ''.join(random.choice(string.digits + string.ascii_letters + punctuation) for i in range(50))
    file_ = file_.replace('CHANGEME!!!', secret, 1)

    # Write the results
    with open(os.path.join(PROJECT_DIRECTORY, 'env.example'), 'w') as f:
        f.write(file_)


def rename_env_file():
    """ Renames env file """
    os.rename(os.path.join(PROJECT_DIRECTORY, 'env.example'), os.path.join(PROJECT_DIRECTORY, '.env'))


def delete_api_files():
    """ Deletes unused API files """
    if '{{ cookiecutter.api }}' == 'REST':
        files = [
            '.graphqlrc',
            'backend/{{cookiecutter.project_slug}}/schema.py',
            'backend/apps/users/schema.py',
            'frontend/src/apollo.js',
        ]
        shutil.rmtree(os.path.join(PROJECT_DIRECTORY, 'frontend/src/graphql'))
    else:
        files = [
            'backend/{{cookiecutter.project_slug}}/api.py',
            'backend/apps/users/views.py',
            'backend/apps/users/serializers.py',
        ]
        shutil.rmtree(os.path.join(PROJECT_DIRECTORY, 'frontend/src/store'))
    
    for filename in files:
        os.remove(os.path.join(PROJECT_DIRECTORY, filename))

def delete_worker_docker_compose():
    """ Deletes unused API files """
    if '{{ cookiecutter.use_redis }}' != 'y' and '{{ cookiecutter.use_mailhog }}' != 'y' and '{{ cookiecutter.use_elastic_search }}' != 'y' and '{{ cookiecutter.use_celery }}' != 'y':
        files = [
            'dc-worker.yml'
        ]
    
        for filename in files:
            os.remove(os.path.join(PROJECT_DIRECTORY, filename))

def delete_celery():
    """ Deletes unused API files """
    if '{{ cookiecutter.use_celery }}' != 'y':
        files = [
            'backend/{{cookiecutter.project_slug}}/celery.py'
        ]
    
        for filename in files:
            os.remove(os.path.join(PROJECT_DIRECTORY, filename))


def delete_intercom():
    """ Deletes unused API files """
    if cookiecutter.analytics != "Intercom":
        files = [
            'frontend/components/Intercom.vue'
        ]
    
        for filename in files:
            os.remove(os.path.join(PROJECT_DIRECTORY, filename))

set_secret_key()
rename_env_file()
delete_api_files()
delete_worker_docker_compose()
delete_celery()
delete_intercom()