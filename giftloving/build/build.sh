echo "Building the project..."
quasar build
echo "Removing .DS_Store files..."
find ../dist -name .DS_Store -type f -delete
echo "Build completed successfully."
