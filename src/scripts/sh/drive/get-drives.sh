#!/bin/sh


function get_drives() {
    lsblk
}

lsblk -J -b