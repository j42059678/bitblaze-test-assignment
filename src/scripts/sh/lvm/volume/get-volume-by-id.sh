#/bin/sh

source ${SCRIPTS_DIR}/sh/lvm/volume/get-volumes.sh

function get_volume_by_id() {
    $LV_ID=$1
    get_volumes | jq ".groups[] | select(.id == \"${LV_ID}\")"
}