#!/bin/bash
cd "$(dirname "$0")"


wget --mirror --convert-links --adjust-extension --page-requisites --timestamping --exclude-directories images https://diamondhunt.co
# Images contains many images that we need which aren't present in the homepage preload
wget --mirror --convert-links --adjust-extension --page-requisites --timestamping --no-parent https://diamondhunt.co/images/
