#!/bin/sh

function delete_volume_by_group_id_and_volume_id() {
    LV_ID=$1
    lvs --units b $LV_ID | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq '{volumes: map({id: .LV, vg_id: .VG, size: .LSize})}'
}