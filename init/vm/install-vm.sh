#/bin/bash

source ../env.sh

qemu-system-x86_64 -m "${BASE_VM_RAM_SIZE}" -hda "${BASE_VM_PATH}" -cdrom "${BASE_ISO_PATH}"