#!/bin/sh
set -e

function get_volume_by_group_id_and_volume_id() {
    VG_ID="$1"
    LV_ID="$2"
    get_volumes | jq ".volumes[] | select(.vg_id == \"${VG_ID}\" and .id == \"${LV_ID}\")"
}