#!/bin/bash
cd "$(dirname "$0")"

# Get new pages
wget --mirror --convert-links --adjust-extension --page-requisites --timestamping --exclude-directories images https://diamondhunt.co
# Images contains many images that we need which aren't present in the homepage preload
wget --mirror --convert-links --adjust-extension --page-requisites --timestamping --no-parent https://diamondhunt.co/images/

# rename cachebuster files
rename -f -v 's/(.*\.js).*/$1/' diamondhunt.co/js/*.js?*
# css files are in the format game-main-style.css?version=76.css
# lazy regex fix
rename -f -v 's/(.*\.css).*.css/$1/' diamondhunt.co/css/*.css?*
