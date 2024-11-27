const path = require("path");
const fs = require("node:fs/promises");

const targetFolder = process.argv[2] ?? '.';

const getStatsSeq = require('./getStatsSeq');
const getStatsPromises = require('./getStatsPromises')
async function simpleLS(targetFolder) {
  let files;
  try {
    files = await fs.readdir(targetFolder);
  } catch (error) {
    console.error(`No such file or directory: ${targetFolder}`);
    process.exit(1);
  }
  // console.log(files); show files

  //first way: sequentially
  // const fileStats = await getStatsSeq(files, targetFolder);

  //second way: using promises
  
  const fileStats = await getStatsPromises(targetFolder, files);
  console.table(fileStats);
}


simpleLS(targetFolder);