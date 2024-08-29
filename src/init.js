// @ts-check

import Example from './Example.js';

export default () => {
  const element = document.getElementById('point');
  const obj = new Example(element);
  console.log('test');
  obj.init();
};
