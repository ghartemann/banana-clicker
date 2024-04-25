#!/bin/bash

sed 's/$MYSQL_PASSWORD/'"$MYSQL_PASSWORD"'/' -i config/db.php
sed 's/$MYSQL_PASSWORD/'"$MYSQL_PASSWORD"'/' -i docker-compose.yml
