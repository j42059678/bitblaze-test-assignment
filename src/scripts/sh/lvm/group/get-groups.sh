#!/bin/sh

function get_groups() {
    vgs | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq 'map({id: .VG})'
}

get_groups