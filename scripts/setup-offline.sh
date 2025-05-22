#!/usr/bin/env bash
set -euo pipefail

echo "Installing node dependencies..."
yarn install --immutable

echo "Installing Playwright browsers..."
# this installs browsers required for E2E tests
npx nx setup twenty-e2e-testing

echo "All dependencies installed."
