#!/bin/bash

if [ "$MODE" == "development" ]; then
	npm start
else
	npm run build
	npm run serve
fi
