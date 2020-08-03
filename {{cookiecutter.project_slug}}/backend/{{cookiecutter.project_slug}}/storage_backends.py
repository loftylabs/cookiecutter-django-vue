from django.conf import settings
from storages.backends.s3boto3 import S3Boto3Storage


class StaticStorage(S3Boto3Storage):
    location = 'static'
    default_acl = 'public-read'
    querystring_auth = False


class MediaStorage(S3Boto3Storage):
    location = 'media'
    default_acl = 'private'
    querystring_auth = True
