#!/bin/sh

function get_groups() {
    vgs | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq .
}

get_groups