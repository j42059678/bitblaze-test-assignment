#!/bin/sh

function get_drives() {
    lsblk -o NAME,SIZE,MOUNTPOINTS -b -Q 'MOUNTPOINTS !~ "/(boot|efi|home|usr)?$"' | awk -f ${SCRIPTS_DIR}/awk/table2json.awk
}

get_drives