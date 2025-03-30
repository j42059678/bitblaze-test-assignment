#/bin/bash

for script in ./drive/*.sh; do
    source "$script"
done

for script in ./lvm/**/*.sh; do
    source "$script"
done