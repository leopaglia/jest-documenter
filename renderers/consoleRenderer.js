const renderLevel = (state, level) => {
  const tabs = '\t'.repeat(level);

  return state.reduce((acc, curr) => {
    if (curr.type === 'describe') {
      const formattedChildren = renderLevel(curr.children, level + 1);
      return `${acc}\n\n${tabs}${curr.text}${formattedChildren}`;
    }

    if (curr.type === 'it') {
      return `${acc}\n${tabs}- ${curr.text}`;
    }
  }, '');
};

const render = state => console.log(renderLevel(state, 0));

module.exports = render;
