import assert from 'assert';
import half from '../index.js';

describe('JavascriptPackage', () => {
  describe('#num()', () => {
    it('should return half of given number', () => {
      assert.equal(3, half(6));
    });
  });
});
