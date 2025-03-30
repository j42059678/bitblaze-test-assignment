#!/bin/sh

function get_groups() {
    vgs --units b --nosuffix | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq '{groups: map({id: .VG, pv: .["#PV"] | tonumber, lv: .["#LV"] | tonumber, size: .VSize | tonumber, free: .VFree | tonumber})}'
}