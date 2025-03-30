#/bin/bash

for script in $SCRIPTS_DIR/sh/drive/*.sh; do
    source "$script"
done

for script in $SCRIPTS_DIR/sh/lvm/**/*.sh; do
    source "$script"
done