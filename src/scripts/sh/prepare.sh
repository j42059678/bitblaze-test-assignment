#!/bin/sh

function prepare() {
    $VG_ID=$1
    echo $VG_ID | awk -f $SCRIPTS_DIR/awk/translite.awk
}