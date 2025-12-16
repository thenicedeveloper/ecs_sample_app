#!/bin/sh
set -e

# Validate secrets exist
if [ -z "$TLS_CERT" ] || [ -z "$TLS_KEY" ]; then
  echo "ERROR: TLS_CERT or TLS_KEY is not set"
  exit 1
fi

# Prepare directories
mkdir -p /etc/ssl/certs /etc/ssl/private

# Write secrets to files
echo "$TLS_CERT" > /etc/ssl/certs/selfsigned.crt
echo "$TLS_KEY" > /etc/ssl/private/selfsigned-rsa.key

# Secure key permissions (nginx requires this)
chmod 600 /etc/ssl/private/selfsigned-rsa.key

exec nginx -g 'daemon off;'