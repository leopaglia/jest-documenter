const fs = require('fs');

const replaceAll = (search, replace, str) => str.replace(new RegExp(search, 'g'), replace);

const card = (name, body) => {
  const id = `${replaceAll(' ', '-', replaceAll('"', '', name))}-${Math.floor(Math.random() * 100000)}`;

  return `
    <div class="card">
      <div class="card-header">
        <a class="card-link" data-toggle="collapse" href="#${id}">
          ${name}
        </a>
      </div>
      <div id="${id}" class="collapse show">
        <div class="card-body">
          ${body}
        </div>
      </div>
    </div>
  `;
};

const p = text => `<p class="p-1">${text}</p>`;

const renderLevel = (state, level) =>
  state.reduce((acc, curr) => {
    if (curr.type === 'describe') {
      const formattedChildren = renderLevel(curr.children, level + 1);
      return acc + card(curr.name, formattedChildren);
    }

    if (curr.type === 'it') {
      return acc + p(curr.name);
    }
  }, '');

const render = state =>
  new Promise((resolve, reject) => {
    const innerHtml = renderLevel(state, 0);
    const template = fs.readFileSync('./template.html', 'utf8');
    const html = template.replace('{body}', innerHtml);

    fs.writeFile(__dirname + '/../../examples/output/htmlRenderer.html', html, err => {
      if (err) reject(err);
      resolve();
    });
  });

module.exports = render;
