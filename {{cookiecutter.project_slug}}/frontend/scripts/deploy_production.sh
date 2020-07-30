#!/bin/sh
AWS_PROFILE=[profile_name]

# Determine where you are
# aws s3api list-buckets --query "Buckets[].Name" --profile=[profile_name]

# Untested cloudfront cache busting
. ./.env.local && \
# aws cloudfront create-invalidation --distribution-id E1HYW6GZMLVQ26 --paths /* --profile=$AWS_PROFILE && \
aws s3 cp dist/ s3://[BUCKET_LOCATION]/ --recursive --acl=public-read --profile=$AWS_PROFILE
