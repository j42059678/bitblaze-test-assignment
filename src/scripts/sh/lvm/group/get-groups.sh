#!/bin/sh

function get_groups() {
    vgs --units b | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq '{groups: map({id: .VG, size: .VSize, free: .VFree})}'
}

get_groups