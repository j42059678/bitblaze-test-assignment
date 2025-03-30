#!/bin/sh

function create_volume() {
    JSON=$1
    LV_NAME=$(echo "${JSON}" | jq -r '.name')
    VG_ID=$(echo "${JSON}" | jq -r '.vg_id')
    VG_SIZE=$(echo "${JSON}" | jq -r '.size')
    lvcreate -L "${LV_SIZE}B" -n $LV_NAME $VG_ID &> /dev/null
}
