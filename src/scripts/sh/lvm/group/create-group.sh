#!/bin/sh
set -e

source $SCRIPTS_DIR/sh/lvm/group/get-group-by-id.sh

function create_group() {
    $JSON=$1
    VG_ID=$(echo "${JSON}" | jq -r '.name')
    DRIVES=$(echo "${JSON}" | jq -r '.drives | join(" ")')
    vgcreate ${VG_ID} ${DRIVES} &> /dev/null
}