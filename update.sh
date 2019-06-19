#!/bin/bash
cd "$(dirname "$0")"

# Get new pages
wget --mirror --convert-links --adjust-extension --page-requisites --timestamping --content-disposition --exclude-directories stats --reject 'stats*' https://diamondhunt.co https://diamondhunt.co/images/

# rename cachebuster files
rename -f -v 's/(.*\.js).*/$1/' diamondhunt.co/js/*.js?*
# css files are in the format game-main-style.css?version=76.css
# lazy regex fix
rename -f -v 's/(.*\.css).*.css/$1/' diamondhunt.co/css/*.css?*

# remove cachebusters from HTML
sed -i 's/%3Fversion=[0-9]\+//' diamondhunt.co/*.html
# fix CSS funny names
sed -i 's/\.css\.html/.css/' diamondhunt.co/*.html
sed -i 's/\.css\.css/.css/' diamondhunt.co/*.html
# fix jquery links
sed -i 's/\.js\.html/.js/' diamondhunt.co/*.html

# remove players online count to avoid constant updates
sed -i -r 's/(Players Online.+) [0-9]+/\1/' diamondhunt.co/*.html
sed -i -r 's/(Players Signed up.+) [0-9]+/\1/' diamondhunt.co/*.html
