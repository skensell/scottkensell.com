#!/bin/bash

set -e

. ignored/virtualenv/bin/activate

make s3_upload

