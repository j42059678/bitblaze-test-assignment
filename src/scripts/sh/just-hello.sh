#!/bin/sh

function message() {
    echo '{ "message": "Hello, LVM!" }' | jq .
}

message