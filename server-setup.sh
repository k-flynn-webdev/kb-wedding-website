#!/bin/bash
source .env


script_location=$(dirname $0)
echo $script_location
pwd

ln -s ${script_location}/nginx/${URL} /etc/nginx/sites-available/
ln -s ${script_location}/nginx/${URL} /etc/nginx/sites-enabled/