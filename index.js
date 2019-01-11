const fs = require('fs');
const render = require('./renderers/htmlRenderer');
const parse = require('./parser');

const simpleTestPath = './examples/input/int.spec.js';
const simpleTestContent = fs.readFileSync(simpleTestPath, 'utf8');

const parsedTree = parse(simpleTestContent);

render('./examples/output/htmlRenderer.html', parsedTree);
