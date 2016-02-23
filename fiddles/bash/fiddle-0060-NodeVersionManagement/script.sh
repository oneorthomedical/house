#!/usr/bin/env bash

clear;
echo "$0" | sed 's/\.\///g' | awk '{print toupper($0)}'
echo "Bash version ${BASH_VERSION}..."


function installN() {
    sudo npm install n -g;
}

function upgradeNode() {
    n stable;
}

