const fs = require('fs')
const { Parser } = require('acorn')
const walk = require('acorn-walk')
const jsx = require('acorn-jsx');
const render = require('./renderers/htmlRenderer');

const extendedParser = Parser.extend(jsx());

const simpleTestPath = './examples/input/int.spec.js'
const simpleTestContent = fs.readFileSync(simpleTestPath, 'utf8')

const ast = extendedParser.parse(simpleTestContent, { sourceType: 'module', ecmaVersion: 10 })

const isDescribe = callExpressionNode => callExpressionNode.callee.name === 'describe'
const isIt = callExpressionNode => callExpressionNode.callee.name === 'it'
const getNodeName = callExpressionNode => callExpressionNode.arguments[0].value
const getChildrenSiblings = callExpressionNode => callExpressionNode.arguments[1].body.body

const state = []

walk.recursive(ast, state, {
  CallExpression(node, state, cb) {
    
    if (isDescribe(node)) {
      const name = getNodeName(node)
      const children = []

      for(child of getChildrenSiblings(node)) {
        const childState = []
        const { expression } = child;

        if (expression) {
          cb(child.expression, childState);
          const newChild = childState[0]
          if (newChild) children.push(newChild)
        }
      }

      state.push({ name, type: 'describe', children }) 
    }

    if (isIt(node)) {
      const name = getNodeName(node)
      state.push({ name, type: 'it' }) 
    }
  } 
})

render('./examples/output/htmlRenderer.html', state)
