#!/bin/sh

function get_groups() {
    vgs --units b | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq '{volumes: {groups: map({id: .VG})}}'
}

get_groups