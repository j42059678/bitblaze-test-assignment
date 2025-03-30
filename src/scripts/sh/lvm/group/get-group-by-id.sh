#!/bin/sh

function get_group_by_id() {
    VG_ID="$1"
    vgs "${VG_ID}" | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq .
}

get_group_by_id $@