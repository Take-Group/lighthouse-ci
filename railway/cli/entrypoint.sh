#!/bin/sh
set -e
cd /home/lhci
git commit --allow-empty -q -m "cron $(date -u +%FT%TZ)"

lhci autorun || lhci_status=$?

# Retention: delete builds older than 30 days. Tables have no FK CASCADE,
# so prune dependents (statistics, runs) in the same statement.
if [ -n "$DATABASE_URL" ]; then
  psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -c "
    WITH expired AS (
      SELECT id FROM builds WHERE \"createdAt\" < NOW() - INTERVAL '30 days'
    ),
    s AS (DELETE FROM statistics WHERE \"buildId\" IN (SELECT id FROM expired) RETURNING 1),
    r AS (DELETE FROM runs       WHERE \"buildId\" IN (SELECT id FROM expired) RETURNING 1)
    DELETE FROM builds WHERE id IN (SELECT id FROM expired);
  " || echo "retention cleanup failed (non-fatal)"
fi

exit "${lhci_status:-0}"
