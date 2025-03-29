#!/bin/sh



function create_group() {
    vgcreate $@
}

create_group $@