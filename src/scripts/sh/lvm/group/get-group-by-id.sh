#!/bin/sh

function get_group_by_id() {
    VG_ID="$1"
    vgs "${VG_ID}"
}

get_group_by_id $@