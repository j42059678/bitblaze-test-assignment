#!/bin/sh
set -e

source $SCRIPTS_DIR/sh/lvm/group/get-group-by-id.sh

function create_group() {
    VG_ID="$1"
    DRIVES=${@:2}
    vgcreate ${VG_ID} ${DRIVES} &> /dev/null
}
JSON=$1
echo "${JSON}" && exit
VG_ID=$(echo "${JSON}" | jq -r '.name')
DRIVES=$(echo "${JSON}" | jq -r '.drives | join(" ")')
create_group "${VG_ID}" ${DRIVES}
get_group_by_id "${VG_ID}"