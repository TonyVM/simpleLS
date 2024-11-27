const fs = require("node:fs/promises");
const path = require("path");

//Regular function
async function getFileStats(files, targetFolder) {
  let fileStats = [];
  for (const file of files) {
    const stat = await fs.stat(path.join(targetFolder, file));
    fileStats.push(
      { type: stat.isDirectory() ? 'D' : 'f',
        fileName: file,
        size: `${stat.size} bytes` ,
        lastModified: stat.mtime.toLocaleString()
      }
    )
  }
  return fileStats;
}

module.exports = getFileStats;