const { path, pathEq } = 'ramda';

const calleeNameEquals = pathEq(['callee', 'name']);

const isDescribe = calleeNameEquals('describe');
const isIt = calleeNameEquals('it');
const getNodeName = path(['arguments', 0, 'value']);
const getChildrenSiblings = path(['arguments', 1, 'body', 'body']);

module.exports = {
  isDescribe,
  isIt,
  getChildrenSiblings,
  getNodeName
};
