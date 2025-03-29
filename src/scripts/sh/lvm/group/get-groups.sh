#!/bin/sh

function get_groups() {
    vgs | awk -f ../../../table2json.awk
}

get_groups