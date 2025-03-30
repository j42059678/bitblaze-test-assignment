#!/bin/bash
set -e

source SCRIPTS_DIR/sh/hello.sh

for script in $SCRIPTS_DIR/sh/drive/*.sh; do
    source "$script"
done

for script in $SCRIPTS_DIR/sh/lvm/**/*.sh; do
    source "$script"
done