#/bin/sh

function get_volume_by_id() {
    $LV_ID=$1
    lvs --units b $LV_ID | awk -f ${SCRIPTS_DIR}/awk/table2json.awk | jq 'map({id: .LV, vg_id: .VG, size: .LSize})[0]'
}