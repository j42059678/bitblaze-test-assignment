#!/bin/sh
set -e
source ${SCRIPTS_DIR}/get-group-by-id.sh

function delete_group_by_id() {
    VG_ID="$1"
    vgremove "${VG_ID}"
}
VG_ID="$1"
VG=$(get_group_by_id "${VG_ID}")
delete_group_by_id "${VG_ID}"
echo "${VG}"