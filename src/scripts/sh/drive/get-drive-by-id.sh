#!/bin/sh


function get_drive_by_id() {
    lsblk -J -b $1
}

get_drive_by_id $1