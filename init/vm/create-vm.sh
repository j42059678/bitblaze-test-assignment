#/bin/bash

qemu-img create -f "${BASE_VM_DRIVE_TYPE}" "${BASE_VM_NAME}.${BASE_VM_DRIVE_TYPE}" "${BASE_VM_DRIVE_SIZE}"