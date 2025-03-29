#!/bin/sh

function delete_group_by_id() {
    VG_ID="$1"
    vgremove "${VG_ID}"
}

delete_group_by_id $@