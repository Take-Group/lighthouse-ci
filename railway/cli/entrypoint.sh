#!/bin/sh
set -e
cd /home/lhci
git commit --allow-empty -q -m "cron $(date -u +%FT%TZ)"
exec lhci autorun
