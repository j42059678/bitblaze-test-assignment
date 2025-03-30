#!/bin/sh


function get_drive_by_id() {
    lsblk -o NAME,SIZE,MOUNTPOINTS -b -Q 'MOUNTPOINTS !~ "/(boot|efi|home|usr)?$"' $1 | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq 'map({name: .NAME, size: .SIZE})[0]'
}

get_drive_by_id $1