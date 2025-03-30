#!/bin/sh

function get_hello() {
    echo '{ "message": "Hello, LVM!" }' | jq .
}