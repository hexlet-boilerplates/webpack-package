import assert from 'assert';
import javascriptPackage from '../index.js';

describe('JavascriptPackage', () => {
  describe('#num()', () => {
    it('should return half of given number', () => {
      assert.equal(3, javascriptPackage.half(6));
    });
  });
});
