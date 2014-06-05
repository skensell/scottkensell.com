#!/bin/bash
set -ex

die(){ echo "ERROR: setup failed. $@" >&2; exit 1; }
check_command(){ which $1 >/dev/null || die $2; }

THIS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "${THIS_DIR}"

[ -d ignored ] && die "You must remove the ignored directory."

check_command virtualenv 'You need to install virtualenv. See http://stackoverflow.com/questions/4324558/whats-the-proper-way-to-install-pip-virtualenv-and-distribute-for-python'
mkdir -p ignored
virtualenv ignored/virtualenv
. ignored/virtualenv/bin/activate

# these flags are stupid and necessary for pycrypto
export CFLAGS=-Qunused-arguments
export CPPFLAGS=-Qunused-arguments
pip install -r requirements.txt

cd ignored
git clone git@github.com:skensell/pelican-themes.git -b SoMA2
git clone https://github.com/s3tools/s3cmd

cd ${THIS_DIR}
ln -sf ignored/s3cmd/s3cmd "${THIS_DIR}"/s3cmd 
echo "Do not forget to add AWS credentials to ~/.s3cfg"
