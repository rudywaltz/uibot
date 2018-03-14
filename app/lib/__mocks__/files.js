'use strict';

class Files {

  async readFilesInFolder() {
    return new Promise((resolve, reject) => {
      try {
        resolve([
          JSON.stringify({'name': 'Button'}),
          JSON.stringify({'name': 'TestComponent'})
        ]);
      } catch (error) {
        reject('Error: ', error);
      }
    });
  }



  listFolder() {
    return new Promise((resolve) => {
      resolve(['test1', 'test2']);
    });
  }

}

module.exports = new Files();
