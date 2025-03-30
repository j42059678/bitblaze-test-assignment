#!/bin/sh
set -e

function create_group() {
    VG_ID="$1"
    DRIVES=${@:2}
    vgcreate ${VG_ID} ${DRIVES} &> /dev/null
}
JSON=$1
VG_ID=$(echo "${JSON}" | jq '.name')
DRIVES=$(echo "${JSON}" | jq '.drives | join(" ")')
create_group "${VG_ID}" ${DRIVES}
get_group_by_id "${VG_ID}"