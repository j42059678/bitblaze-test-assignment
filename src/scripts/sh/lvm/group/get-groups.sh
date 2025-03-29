#!/bin/sh

function get_groups() {
    vgs | awk -f src/scripts/awk/table2json.awk
}

get_groups