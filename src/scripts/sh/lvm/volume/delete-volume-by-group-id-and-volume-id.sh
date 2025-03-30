#!/bin/sh

function delete_volume_by_group_id_and_volume_id() {
    VG_ID=$1
    LV_ID=$2
    lvremove -f "/dev/${VG_ID}/${LV_ID}" &> /dev/null
}