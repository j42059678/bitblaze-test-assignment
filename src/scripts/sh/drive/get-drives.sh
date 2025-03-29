#!/bin/sh

function get_drives() {
    lsblk -o NAME,SIZE,MOUNTPOINTS -b -Q 'MOUNTPOINTS !~ "/$"' | awk -f ${SCRIPTS_DIR}/awk/table2json.awk
}

get_drives