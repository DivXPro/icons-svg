'use strict';

const path = require('path');
const fs = require('fs');
const globby = require('globby');

const list = [];

for (const theme of ['Buildings', 'Business', 'Communication', 'Design', 'Development', 'Device', 'Document', 'Editor', 'Finance', 'Health', 'Logos', 'Map', 'Media', 'Others', 'System', 'User', 'Weather']) {
  globby.sync(`../svg/${theme}/*.svg`, { cwd: __dirname }).forEach((p) => {
    const parsed = path.parse(p);
    const { name } = parsed;
    list.push({ name, theme });
  });
}

fs.writeFileSync(
  path.resolve(__dirname, './digest.txt'),
  list
    .map(({ name, theme }) => `${name}-${theme}`)
    .sort()
    .join('\n'),
  'utf8'
);
