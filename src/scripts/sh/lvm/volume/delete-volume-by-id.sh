#!/bin/sh

function get_volume_by_id() {
    lvs | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq .
}

LV_ID=${1}
get_volume_by_id "${LV_ID}"