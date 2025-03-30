#!/bin/sh

source $SCRIPTS_DIR/sh/drive/get-drives.sh

function get_drive_by_id() {
    DRIVE_ID=$1
    get_drives | jq ".drives[] | select(.id = ${DRIVE_ID})"
}