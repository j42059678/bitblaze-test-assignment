#!/bin/bash

VM_IP=localhost

function open_web_api_console() {
    xdg-open "https://${VM_IP}:3000/api"
}