#!/bin/bash

# Exit on error
set -e

# Check for Node.js and npm
if ! [ -x "$(command -v node)" ] || ! [ -x "$(command -v npm)" ]; then
  echo "Error: Node.js and npm are required to install Speedster CLI." >&2
  exit 1
fi

# Define installation directory
INSTALL_DIR="$HOME/.speedster-cli"

# Clone the repository
if [ -d "$INSTALL_DIR" ]; then
  echo "Updating Speedster CLI..."
  cd "$INSTALL_DIR"
  git pull
else
  echo "Installing Speedster CLI..."
  git clone https://github.com/aarya2410/speedster-cli.git "$INSTALL_DIR"
  cd "$INSTALL_DIR"
fi

# Install dependencies
cd cli
npm install

# Create symbolic link
ln -sf "$INSTALL_DIR/cli/index.js" /usr/local/bin/speedster

# Make executable
chmod +x /usr/local/bin/speedster

echo "Speedster CLI installed successfully!"
echo "Run 'speedster' to check your internet speed."
