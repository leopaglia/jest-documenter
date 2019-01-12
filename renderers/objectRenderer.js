const fs = require('fs');

const render = state =>
  new Promise((resolve, reject) => {
    fs.writeFile(__dirname + '/../examples/output/objectRenderer.json', JSON.stringify(state), err => {
      if (err) reject(err);
      resolve();
    });
  });

module.exports = render;
