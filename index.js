const fs = require('fs')
const acorn = require("acorn")
const walk = require("acorn/dist/walk")

const simpleTestPath = './examples/simpleTest.spec.js'
const simpleTestContent = fs.readFileSync(simpleTestPath, "utf8")

const ast = acorn.parse(simpleTestContent)

const isDescribe = callExpressionNode => callExpressionNode.callee.name === "describe"
const isIt = callExpressionNode => callExpressionNode.callee.name === "it"
const getNodeName = callExpressionNode => callExpressionNode.arguments[0].value
const getChildrenSiblings = callExpressionNode => callExpressionNode.arguments[1].body.body

const state = []

walk.recursive(ast, state, {
  CallExpression(node, state, c) {
    if (isDescribe(node)) {
      const name = getNodeName(node)

      const children = []
      for(child of getChildrenSiblings(node)) {
        const childState = []
        c(child.expression, childState)
        const newChild = childState[0]
        if (newChild) children.push(newChild)
      }

      state.push({ name, type: "describe", children }) 
    }

    if (isIt(node)) {
      const name = getNodeName(node)
      state.push({ name, type: "it" }) 
    }
  } 
})

const renderLevel = (state, level) => {
  const tabs = '\t'.repeat(level)

  return state.reduce((acc, curr) => {
    if(curr.type === "describe") {
      const formattedChildren = renderLevel(curr.children, level + 1)
      return `${acc}\n\n${tabs}${curr.name}${formattedChildren}`
    }

    if(curr.type === "it") {
      return `${acc}\n${tabs}- ${curr.name}`
    }
  }, '')
}

const formattedString = renderLevel(state, 0)

formattedString