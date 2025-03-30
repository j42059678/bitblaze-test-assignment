#!/bin/sh

function get_group_by_id() {
    VG_ID="$1"
    vgs --units b "${VG_ID}" | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq 'map({id: .VG, size: .VSize, free: .VFree})[0]'
}

get_group_by_id $@