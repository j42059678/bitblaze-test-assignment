#!/bin/sh

function get_volumes() {
    lvs | awk -f ${SCRIPTS_DIR}/awk/table2json.awk
}

VG_ID=${1}
get_volumes ${VG_ID}