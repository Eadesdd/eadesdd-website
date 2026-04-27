#!/bin/bash
set -e

echo "Building Next.js..."
npm run build

echo "Preparing Firebase Functions..."
rm -rf functions/.next functions/public
cp -r .next functions/.next
cp -r public functions/public

echo "Preparing Firebase Hosting..."
rm -rf hosting_public
mkdir -p hosting_public/_next
cp -r .next/static hosting_public/_next/static
cp -r public/. hosting_public/

echo "Done. Run 'npx firebase-tools deploy' to deploy."
