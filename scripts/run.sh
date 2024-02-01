#!/bin/bash

#pip install debugpy -t /tmp
#python /tmp/debugpy --wait-for-client --listen 0.0.0.0:5679 -m nomad.cli admin run app --with-gui --gunicorn --host 0.0.0.0 $@
python -m nomad.cli admin run app --with-gui --gunicorn --host 0.0.0.0 $@
