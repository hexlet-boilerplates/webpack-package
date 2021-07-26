import { promises as fs } from 'fs';
import path from 'path';
import init from '../src/init';

beforeEach(async () => {
  const pathToHtml = path.resolve(__dirname, '__fixtures__/index.html');
  const html = await fs.readFile(pathToHtml, 'utf8');
  document.body.innerHTML = html;
  init();
});

test('init', () => {
  const element = document.getElementById('point');
  expect(element.textContent).toEqual('hello, world!');
});
