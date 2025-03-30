#!/bin/sh
set -e

function create_group() {
    VG_ID="$1"
    DRIVES=${@:2}
    vgcreate ${VG_ID} ${DRIVES}
}