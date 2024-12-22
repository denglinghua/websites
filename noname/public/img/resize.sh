#!/bin/bash

# Check if the input directory is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <input_directory> <output_directory>"
  exit 1
fi

# Directory containing the images
input_dir="$1"

# Loop through all images in the input directory
for image in "$input_dir"/*.{jpg,jpeg,png}; do
  # Get the base name of the image
  base_name=$(basename "$image")

  # Get the dimensions of the image
  width=$(sips -g pixelWidth "$image" | awk '/pixelWidth/ {print $2}')
  height=$(sips -g pixelHeight "$image" | awk '/pixelHeight/ {print $2}')

  # max (width, height)
  dimension=0
  resample=""
  if [ "$width" -gt "$height" ]; then
    dimension=$width
    resample="Width"
  else
    dimension=$height
    resample="Height"
  fi

  echo "Image: $base_name, $resample: $dimension"

  # Check if the image width is greater than 1000 pixels
  if [ "$dimension" -gt 1000 ]; then
    # Resize the image to a width or height of 960 pixels
    sips "--resample$dimension" 960 --setProperty formatOptions 80 "$image" --out "$input_dir/$base_name"
    echo "Resized $base_name to 960"
  fi
done

echo "Batch resize complete."
