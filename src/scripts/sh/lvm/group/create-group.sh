#!/bin/bash


function create_group() {
    vgcreate $@
}

create_group $@