#!/bin/sh

function get_drive_by_id() {
    DRIVE_ID=$1
    lsblk -o NAME,SIZE,MOUNTPOINTS -b -Q 'MOUNTPOINTS !~ "/(boot|efi|home|usr)?$"' "/dev/${DRIVE_ID}" | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq 'map({name: .NAME, size: .SIZE})[0]'
}