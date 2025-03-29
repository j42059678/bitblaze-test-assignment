#!/bin/sh


function get_volumes() {
    lvs $@
}

GROUP_ID=${1}

get_volumes ${GROUP_ID}