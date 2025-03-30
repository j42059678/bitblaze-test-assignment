#!/bin/sh

source ${SCRIPTS_DIR}/sh/lvm/group/get-groups.sh

function get_group_by_id() {
    VG_ID="$1"
    get_groups | jq ".groups[] | select(.id == \"${VG_ID}\")"
}