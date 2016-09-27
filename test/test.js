// @flow

import { it, describe } from 'mocha';
import assert from 'assert';
import half from '../src/index';

describe('JavascriptPackage', () => {
  describe('#half()', () => {
    it('should return half of given number', () => {
      assert.equal(3, half(6));
    });
  });
});
