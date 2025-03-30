#!/bin/sh

function get_drives() {
     lsblk -bdo NAME,SIZE -Q 'TYPE == "disk"' | grep -v "$(lsblk -d -nopkname $(findmnt -no source))" | awk -f src/scripts/awk/table2json.awk | jq '{drives: map({name: .NAME, size: .SIZE})}'
}