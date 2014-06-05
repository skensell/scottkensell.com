#!/bin/bash
set -e

THIS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${THIS_DIR}"

source ignored/virtualenv/bin/activate

make html
make devserver
