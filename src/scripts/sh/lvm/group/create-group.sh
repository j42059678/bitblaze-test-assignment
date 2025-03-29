#!/bin/sh
set -e

source get-group-by-id.sh

function create_group() {
    VG_ID="$1"
    DRIVES=${@:2}
    vgcreate ${VG_ID} ${DRIVES}
}
VG_ID="$1"
create_group "${VG_ID}"
get_group_by_id "${VG_ID}"