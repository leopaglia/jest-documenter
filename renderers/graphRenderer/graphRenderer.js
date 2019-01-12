const cytoscape = require('cytoscape');
const style = require('./style');

const parseNode = ({ id, type, text }) => ({
  id,
  name: text,
  weight: 50,
  faveColor: type === 'describe' ? '#6FB1FC' : 'red',
  faveShape: 'rectangle'
});

const buildEdge = (sourceId, targetId) => ({
  source: sourceId,
  target: targetId,
  faveColor: '#6FB1FC',
  strength: 30
});

const parseTree = (tree, nodes = [], edges = []) => {
  if (!tree) {
    return {
      nodes,
      edges
    };
  }

  tree.forEach(n => {
    nodes.push(parseNode(n));

    const { children } = n;
    if (Array.isArray(children)) {
      children.forEach(child => edges.push(buildEdge(node.id, child.id)));
    }

    return parseTree(children, nodes, edges);
  });
};

module.exports = tree => {
  const { nodes, edges } = parseTree(tree);

  return cytoscape({
    container: document.querySelector('#app'),
    elements: {
      nodes,
      edges
    },
    style
  });
};
