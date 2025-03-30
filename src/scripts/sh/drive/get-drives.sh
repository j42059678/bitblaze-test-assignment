#!/bin/sh

function get_drives() {
     lsblk -bdo NAME,SIZE -Q 'TYPE == "disk"' | grep -v "$(lsblk -d -nopkname $(findmnt -no source /))" | awk -f $SCRIPTS_DIR/awk/table2json.awk | jq '{drives: map({id: .NAME, size: .SIZE})}'
}