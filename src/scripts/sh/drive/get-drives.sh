#!/bin/sh

function get_drives() {
     lsblk -b -o NAME,SIZE | awk -f src/scripts/awk/table2json.awk | jq '{drives: map({name: .NAME, size: .SIZE})}'
}