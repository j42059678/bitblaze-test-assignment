#!/bin/sh

function get_groups() {
    vgs --units b | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq '{groups: map({id: .VG, size: .VSize[0:-1] | tonumber, free: .VFree[0:-1] | tonumber})}'
}