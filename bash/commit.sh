#!/bin/bash
echo "Commit has been committed and is being pushed to repo - let's get to work!"

echo "TODO: push code to Raspberry Pi"

pwd
ssh pi@10.100.1.16 'cd ~/dev/io.milner-next; git pull; npm run start'
EOF