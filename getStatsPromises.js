const fs = require("node:fs/promises");
const path = require("path");

async function getFileStats(targetFolder, files) {
  let filePromises = files.map(async (file) => {
    let stats = await fs.stat(path.join(targetFolder, file));
    return {
      type: stats.isDirectory() ? "D" : "f",
      fileName: file,
      size: `${stats.size} bytes`,
      lastModified: stats.mtime.toLocaleString(),
    };
  });
  return Promise.all(filePromises);
}

module.exports = getFileStats;
