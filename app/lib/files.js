'use strict';
const fs = require('fs');
const path = require('path');
const { curryN, map, pipe } = require('ramda');

const prependPath = curryN(2, path.resolve);

class Files {

  async readFilesInFolder(folder) {
    return pipe(
      map(prependPath(folder)),
      map(this.readFile),
      Promise.all.bind(Promise)
    )(await this.listFolder(folder));
  }


  listFolder(folderPath) {
    return new Promise((resolve, reject) => {
      fs.readdir(folderPath, (error, fileNames) => error ? reject(error) : resolve(fileNames));
    });
  }


  readFile(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (error, content) => error ? reject(error) : resolve(content));
    });
  }

}

module.exports = new Files();
