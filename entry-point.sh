#!/bin/bash

yarn install
yarn build
pm2 kill
pm2 start yarn --name "nextjs" --interpreter bash -- start