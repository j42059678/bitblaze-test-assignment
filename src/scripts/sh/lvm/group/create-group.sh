#!/bin/sh
set -e

function create_group() {
    VG_ID="$1"
    DRIVES=${@:2}
    vgcreate ${VG_ID} ${DRIVES} | jq .
}
VG_ID="$1"
DRIVES=${@:2}
create_group "${VG_ID}" ${DRIVES}
get_group_by_id "${VG_ID}"