#!/bin/sh

function delete_volume_by_group_id_and_volume_id() {
    VG_ID=$1
    LV_ID=$2
    vgremove $VG_ID -f $LV_ID
    echo -n $VG_ID $LV_ID
}