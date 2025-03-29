#!/bin/sh

function get_volumes() {
    lvs $@ | awk -f ../../../table2json.awk
}

GROUP_ID=${1}

get_volumes ${GROUP_ID}