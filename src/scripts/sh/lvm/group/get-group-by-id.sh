#!/bin/sh

function get_group_by_id() {
    VG_ID="$1"
    vgs "${VG_ID}" | awk -f src/scripts/awk/table2json.awk
}

get_group_by_id $@