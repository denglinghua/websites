const fs = require('fs');
const path = require('path');

// Get directoryPath and prefix from command-line arguments
const [directoryPath, prefix] = process.argv.slice(2);

if (!directoryPath || !prefix) {
  console.log('Usage: node script.js <directoryPath> <prefix>');
  process.exit(1);
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.sort(); // Optional: Sort files if needed

  files.forEach((file, index) => {
    const oldPath = path.join(directoryPath, file);
    const newFileName = `${prefix}${String(index + 1).padStart(2, '0')}${path.extname(file)}`;
    const newPath = path.join(directoryPath, newFileName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.log('Error renaming file:', err);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });
  });
});
