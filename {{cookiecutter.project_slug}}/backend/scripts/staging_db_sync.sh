echo "============ Syncing stage DB to local ============"
PGPASSWORD=$(cat .staging_db_password) pg_dump -c -h [DB_LOCATION] -U [username] [db] | PGPASSWORD=[password] psql -h db -U postgres postgres
echo "============ Done! ============"