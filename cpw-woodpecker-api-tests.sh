#!/bin/bash

# Get the cpw-woodpecker-sid

output=$(curl \
    -X POST https://127.0.0.1:8080/api/v0/system/login \
    -H "Content-Type: application/json" -k -s -D - -o /dev/null \
    -d '[{"user": "root", "password": "root_password"}]' | grep "cpw-woodpecker-sid")

IFS=' '
read -ra strarr <<< "$output"
IFS=';'
read -ra strarr <<< "${strarr[1]}"
IFS='='
read -ra strarr <<< "${strarr[0]}"
cpw_woodpecker_sid="${strarr[1]}"

printf "CPW Woodpecker Session ID: ${cpw_woodpecker_sid}\n"

# Execute the method

printf "$1:\n"

case $1 in

    POST)
        # POST Method

        curl \
            -X POST https://127.0.0.1:8080/api/v0/products \
            -H "Content-Type: application/json" -k \
            --cookie "cpw-woodpecker-sid=${cpw_woodpecker_sid}" \
            -d @./http_request_body_post.json

        printf "\nEND POST\n"
    ;;

    PUT)
        # PUT Method

        curl \
            -X PUT https://127.0.0.1:8080/api/v0/products \
            -H "Content-Type: application/json" -k \
            --cookie "cpw-woodpecker-sid=${cpw_woodpecker_sid}" \
            -d @./http_request_body_put.json

        printf "\nEND PUT\n"
    ;;

    DEL)
        # DEL Method

        curl \
            -X DEL https://127.0.0.1:8080/api/v0/products \
            -H "Content-Type: application/json" -k \
            --cookie "cpw-woodpecker-sid=${cpw_woodpecker_sid}" \
            -d @./http_request_body_del.json

        printf "\nEND DEL\n"
    ;;

    GET | *)
        # GET Method

        curl \
            -X GET https://127.0.0.1:8080/api/v0/products \
            -H "Content-Type: application/json" -k \
            --cookie "cpw-woodpecker-sid=${cpw_woodpecker_sid}" \
            -d @./http_request_body_get.json

        printf "\nEND GET\n"
    ;;

esac
