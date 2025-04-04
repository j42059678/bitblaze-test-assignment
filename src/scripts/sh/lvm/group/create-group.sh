#!/bin/sh
set -e

function create_group() {
    JSON=$1
    VG_ID=$(echo "${JSON}" | jq -r '.name')
    DRIVES=$(echo "${JSON}" | jq -r '.drives | map("/dev/" + .) | join(" ")')
    vgcreate "${VG_ID}" $DRIVES &> /dev/null
    echo -n $VG_ID
}