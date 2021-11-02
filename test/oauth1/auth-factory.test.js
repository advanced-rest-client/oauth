import { assert } from '@open-wc/testing';
import { OAuth1Authorization } from '../../index.js';

describe('OAuth1Authorization', () => {
  describe('Hmac SHA1 generation', () => {
    it('generates the HMAC-SHA1 signature', async () => {
      const element = new OAuth1Authorization();
      const src = 'a value to encode';
      const key = 'a3f4c3e07af7';
      const result = element._createSignatureHamacSha1(src, key);
      assert.equal(result, 'Hl+3ChWzhgBGOAVS6QBfpkPBk2w=');
    });
  });
});
