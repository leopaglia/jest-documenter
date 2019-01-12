const fs = require('fs');
const { objectRenderer } = require('./renderers');
const parse = require('./parser');

const simpleTestPath = './examples/input/int.spec.js';
const simpleTestContent = fs.readFileSync(simpleTestPath, 'utf8');

const parsedTree = parse(simpleTestContent);

objectRenderer(parsedTree);
