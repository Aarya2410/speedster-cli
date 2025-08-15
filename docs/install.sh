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
  git fetch origin
  git reset --hard origin/main
  git pull origin main
else
  echo "Installing Speedster CLI..."
  git clone https://github.com/aarya2410/speedster-cli.git "$INSTALL_DIR"
  cd "$INSTALL_DIR"
fi

# Install dependencies
cd cli
npm ci --only=production

# Create symbolic link
echo "Sudo password may be required to create a symbolic link in /usr/local/bin"
sudo ln -sf "$INSTALL_DIR/cli/index.js" /usr/local/bin/speedster

# Make executable
sudo chmod +x /usr/local/bin/speedster

echo "Speedster CLI installed successfully!"
echo "Run 'speedster' to check your internet speed."
