#!/bin/sh
set -e

function create_volume() {
    JSON=$1
    LV_ID=$(echo "${JSON}" | jq -r '.name')
    VG_ID=$(echo "${JSON}" | jq -r '.vg_id')
    LV_SIZE=$(echo "${JSON}" | jq -r '.size')
    lvcreate -L "${LV_SIZE}B" -n "${LV_ID}" "${VG_ID}" &> /dev/null
    echo -n $LV_ID
}
