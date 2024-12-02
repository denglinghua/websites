const fs = require("fs");
const path = require("path");

// Function to get all files recursively
function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

// Function to get structured data
function getStructuredData(dir) {
  const files = getFilesRecursively(dir);
  const structuredData = [];

  files.forEach((file) => {
    const relativePath = path.relative(dir, file);
    const parts = relativePath.split(path.sep);
    const firstLevelFolder = parts[0];
    const fileNameWithoutExt = path.basename(file, path.extname(file));

    let folderData = structuredData.find(
      (item) => item.folder === firstLevelFolder
    );
    if (!folderData) {
      folderData = { folder: firstLevelFolder, files: [] };
      structuredData.push(folderData);
    }
    folderData.files.push(fileNameWithoutExt);
  });

  return structuredData;
}

// Example usage
const targetDir = "./public/img/ps";
const result = getStructuredData(targetDir);
console.log(JSON.stringify(result, null, 2));
