#!/bin/sh

function create_volume_by_group_id() {
    JSON=$1
    LV_NAME=$(echo "${JSON}" | jq -r '.name')
    VG_ID=$(echo "${JSON}" | jq -r '.vg_id')
    VG_SIZE=$(echo "${JSON}" | jq -r '.size')
    lvgcreate -L $LV_SIZE -n $LV_NAME $VG_ID
}
