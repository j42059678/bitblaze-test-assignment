#!/bin/sh
set -e

function get_volumes_by_group_id() {
    VG_ID="$1"
    get_volumes | jq "[.volumes[] | select(.vg_id == \"${VG_ID}\")]"
}