#!/bin/sh

cat << "EOF"
  _____          _                      _   _
 |  __ \        | |                    | | (_)
 | |__) |___  __| | ___ _ __ ___  _ __ | |_ _  ___  _ __
 |  _  // _ \/ _` |/ _ \ '_ ` _ \| '_ \| __| |/ _ \| '_ \
 | | \ \  __/ (_| |  __/ | | | | | |_) | |_| | (_) | | | |
 |_|  \_\___|\__,_|\___|_| |_| |_| .__/ \__|_|\___/|_| |_|
                                 | |
                                 |_|

EOF

echo "Building the project"
export COMPOSE_CONVERT_WINDOWS_PATHS=1
docker-compose up --build
