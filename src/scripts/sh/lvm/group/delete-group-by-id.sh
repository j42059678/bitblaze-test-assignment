#!/bin/sh
set -e

function delete_group_by_id() {
    VG_ID="$1"
    vgremove -f "${VG_ID}"
}