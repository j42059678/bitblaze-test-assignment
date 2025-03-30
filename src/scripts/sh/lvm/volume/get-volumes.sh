#!/bin/sh

function get_volumes() {
    lvs --units b | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq '{volumes: map({id: .LV, vg_id: .VG, size: .LSize})}'
}

VG_ID=${1}
get_volumes ${VG_ID}