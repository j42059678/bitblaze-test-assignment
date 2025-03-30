#/bin/sh

source "${SCRIPTS_DIR}/sh/lvm/volume/get-volumes.sh"

function get_volumes_by_group_id() {
    LV_ID="$1"
    get_volumes | jq ".volumes[] | select(.vg_id == \"${LV_ID}\")"
}