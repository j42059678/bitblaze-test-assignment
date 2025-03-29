#!/bin/sh


source ../env.sh

function download_iso_image() {
    test -f $BASE_ISO_IMAGE_PATH || wget $BASE_ISO_IMAGE_URL -O $BASE_ISO_IMAGE_PATH
    test -f $BASE_ISO_IMAGE_HASH_PATH || wget $BASE_ISO_IMAGE_HASH_URL -O $BASE_ISO_IMAGE_HASH_PATH
}