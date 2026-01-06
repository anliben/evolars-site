#!/usr/bin/env bash
set -euo pipefail

# Porta vem do Railway (env PORT)
./caddy run --config Caddyfile --adapter caddyfile
