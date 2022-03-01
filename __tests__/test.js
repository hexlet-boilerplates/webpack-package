// @ts-check

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import init from '../src/init';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

beforeEach(async () => {
  const pathToHtml = path.resolve(__dirname, '__fixtures__/index.html');
  const html = await fs.readFile(pathToHtml, 'utf8');
  document.body.innerHTML = html;
});

test('init', () => {
  init();
  expect(true).toBeDefined();
});
