// @flow

import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import init from '../src/init';

const readFile = promisify(fs.readFile);

beforeEach(async () => {
  const pathToHtml = path.resolve(__dirname, '__fixtures__/index.html');
  const html = await readFile(pathToHtml, 'utf8');
  document.body.innerHTML = html;
});

test('init', () => {
  init();
});
