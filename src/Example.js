// @flow

export default class Example {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }
  init() {
    this.element.textContent = 'hello, world!';
    console.log('ehu!');
  }
}
