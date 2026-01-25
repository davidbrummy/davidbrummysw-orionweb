#!/bin/bash

docker build . -t davidbrummysw-orion-web1.0

docker run -it -p 80:80 --network orion --name davidbrummysw-orion-web davidbrummysw-orion-web1.0
