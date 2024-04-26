#!/bin/bash

sed 's/$SQL_PASSWORD/'"$MYSQL_PASSWORD"'/' -i config/db.php
sed 's/$SQL_PASSWORD/'"$MYSQL_PASSWORD"'/' -i docker-compose.yml
