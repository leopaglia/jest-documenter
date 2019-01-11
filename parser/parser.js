const { head, isEmpty } = require('ramda');
const { Parser } = require('acorn');
const walk = require('acorn-walk');
const jsx = require('acorn-jsx');

const { isDescribe, isIt, getNodeName, getChildrenSiblings } = require('./utils');

const extendedParser = Parser.extend(jsx());

const parserOptions = {
  sourceType: 'module',
  ecmaVersion: 10
};

const parse = testContent => {
  const ast = extendedParser.parse(testContent, parserOptions);

  const parseDescribeNode = (node, cb) => {
    const children = getChildrenSiblings(node).reduce((acc, { expression }) => {
      if (!expression) return acc;

      const childState = [];

      cb(expression, childState);

      return isEmpty(childState) ? acc : [...acc, head(childState)];
    }, []);

    return { name: getNodeName(node), type: 'describe', children };
  };

  const parseItNode = node => ({ name: getNodeName(node), type: 'it' });

  const state = [];

  walk.recursive(ast, state, {
    CallExpression(node, state, cb) {
      isDescribe(node) && state.push(parseDescribeNode(node, cb));
      isIt(node) && state.push(parseItNode(node));
    }
  });

  return state;
};

module.exports = parse;
